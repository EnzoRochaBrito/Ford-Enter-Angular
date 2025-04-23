import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

type alertTypes = 'Sucess' | 'Error' | 'Warning'

@Component({
  selector: 'app-alert',
  imports: [NgStyle],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() alert!: alertTypes
  barColors = { 'Sucess' : 'var(--bs-green)', 'Error': 'var(--bs-red)', 'Warning': 'var(--bs-yellow)'}
}
