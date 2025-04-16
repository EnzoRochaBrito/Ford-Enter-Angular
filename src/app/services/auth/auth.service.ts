import { inject, Injectable } from '@angular/core';
import { SessionStorageService } from '../localstorage/sessionstorage.service';
import { Router } from '@angular/router';

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
  
  saveLogin<T>(user: T){

    let localStorage;

    if (AuthService.isautologin){
      localStorage = new SessionStorageService(window.localStorage)
    } else {
      window.localStorage.clear()
      localStorage = new SessionStorageService(window.sessionStorage)
    }

    let currentogin = localStorage.get("user");
    
    if (!currentogin) localStorage.set("user", user);
    
    localStorage.set('logged', true);
  }
  
  canActivate(): boolean{
      if (window.localStorage.getItem("logged")) return true;
  
      else if (window.sessionStorage.getItem("logged")) return true;


      this.router.navigate(['login']);
    
      return false
  }
}
