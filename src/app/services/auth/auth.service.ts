import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localstorage/localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private localStorage: LocalStorageService;
  private router: Router;

  constructor(ls: LocalStorageService, router: Router){
    this.localStorage = ls;
    this.router = router
  }

  saveLogin<T>(user: T){
    let currentogin = this.localStorage.get("user");
    
    if (!currentogin) this.localStorage.set("user", user);

    this.localStorage.set('logged', true);
  }

  canActivate(): boolean{
    if (this.localStorage.get("logged")) return true;
    this.router.navigate(['']);
    return false;
  }
}
