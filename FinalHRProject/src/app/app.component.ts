import { Component } from '@angular/core';
import { AuthServiceService } from './Services/auth-service.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'FinalHRProject';


}
