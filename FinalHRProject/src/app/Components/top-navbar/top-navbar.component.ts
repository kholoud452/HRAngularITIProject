import { Component } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-top-navbar',
  standalone: false,
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
  constructor(private _AuthServiceService:AuthServiceService,) { }

  logout(){
    this._AuthServiceService.Logout();
  }
}
