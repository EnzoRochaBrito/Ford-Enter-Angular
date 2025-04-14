import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-login',
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  
  test(event: [string, string]){
    ApiService.login(event[0], event[1]);
  }

}
