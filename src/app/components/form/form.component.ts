import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from '../toggle/toggle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, ToggleComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

autoLogin!: boolean;

password = 'password';
isVisible: boolean = false;

helo(){
  const user = this.loginForm.controls.user.value;
  const password = this.loginForm.controls.password.value;
  
  if (user === 'admin' && password === '123456'){
    alert('logado')
  } else {
    alert('numfoi')
  }
}

loginForm = new FormGroup({
  user: new FormControl('', [Validators.required, Validators.minLength(5)]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)])
})


autoLoginToggle(event: boolean){
  console.log(event)
}

}
