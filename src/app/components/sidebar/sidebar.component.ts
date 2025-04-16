import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sidebarPages, sidebarPagesType } from '../../../utils/routers.links';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  pages = sidebarPages;
}
