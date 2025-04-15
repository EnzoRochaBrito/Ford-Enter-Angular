import { Component, inject } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/localstorage/localstorage.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  
  private router;
  private AuthService;

  constructor(auth:AuthService, router: Router){
    this.router = router;
    this.AuthService = auth;
  }

  async login(event: [string, string]){
    const user = await ApiService.login(event[0], event[1]);
    
    if (!user){
      // popup error
      return
    }
    
    this.AuthService.saveLogin(user);
    this.router.navigate(['/home'])
  }

}
