import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from '../../../utils/models/user/user.dto';
import { SessionStorageService } from '../../services/localstorage/sessionstorage.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  router!: Router;

  constructor(router: Router){
    this.router = router;
  }

  userToggle: boolean = false;
  balloonOnScreen = {"top":"15px"};
  balloonOffScreen = {"top":"-999px"};
  userContentBallon = this.balloonOffScreen;
  storage!: SessionStorageService;
  userInfo!: UserDTO;

  changeUserToggle(){
    this.userToggle = !this.userToggle;
    if (this.userToggle){
      this.userContentBallon = this.balloonOnScreen;
    } else {
      this.userContentBallon = this.balloonOffScreen;
    }
  }

  logoff(){
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['login']);
  }

  ngOnInit(){

    if (window.localStorage.length > 0){
      this.storage = new SessionStorageService(window.localStorage)
    } else {
      this.storage = new SessionStorageService(window.sessionStorage)
    }

    this.userInfo = JSON.parse(this.storage.get("user"))

  }

}
