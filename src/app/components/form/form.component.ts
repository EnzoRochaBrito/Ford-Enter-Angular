import { Component, Input, output } from '@angular/core';
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

  isVisible: boolean = false;

  credentialEmitter = output<[string, string]>();
  autoLoginToggleEmitter = output<boolean>();


  emitValues(){
    const user = this.loginForm.controls.user.value as string;
    const password = this.loginForm.controls.password.value as string;
    this.credentialEmitter.emit([user, password]);
  }

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  autoLoginToggle(event: boolean){
    this.autoLoginToggleEmitter.emit(event);
  }

}
