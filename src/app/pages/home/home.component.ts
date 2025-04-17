import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CardComponent, SidebarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
cardStyleHome = {'width.px': '680', 'height.px': '480'}
}
