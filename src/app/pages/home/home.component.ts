import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';


@Component({
  selector: 'app-home',
  imports: [CardComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
