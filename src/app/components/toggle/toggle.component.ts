import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
  animations: [
    
  ]
})
export class ToggleComponent {
  
  @Output() toggle = new EventEmitter<boolean>();
  
  toggleValue: boolean = false;

  toggleBool(){
    this.toggleValue = !this.toggleValue;
    this.toggle.emit(this.toggleValue);
  }
}
