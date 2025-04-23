import { inject, Injectable } from '@angular/core';
import { SessionStorageService } from '../localstorage/sessionstorage.service';
import { Router } from '@angular/router';
import { UserDTO } from '../../../utils/models/user/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private router: Router;
  private static isautologin: boolean = false;
  
  constructor(router: Router){
    this.router = router
  }

  setAutoLogin(value: boolean){
    AuthService.isautologin = value;
  }
  
  saveLogin(user: UserDTO){

    let localStorage;

    if (AuthService.isautologin){
      localStorage = new SessionStorageService(window.localStorage)
      localStorage.set("autologin", true);
    } else {
      window.localStorage.clear()
      localStorage = new SessionStorageService(window.sessionStorage)
    }
    
    let currentogin = localStorage.get("user");
    
    if (!currentogin) localStorage.set("user", user);
    
    localStorage.set('logged', true);
  }
  
  canActivate(): boolean{
      if (window.localStorage.getItem("autologin")) return true;
  
      else if (window.sessionStorage.getItem("logged")) return true;

      this.router.navigate(['login']);
    
      return false
  }
}
