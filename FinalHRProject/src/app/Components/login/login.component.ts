import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../Services/auth-service.service';
import { LoginDto } from '../../Models/loginDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  errorFromDB : string = '';
  constructor(private _AuthServiceService:AuthServiceService, private _Router:Router) { }

  loginForm : any  = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/)]),
    token : new FormControl(null)
  })

  SubmitLoginForm(loginForm: FormGroup) {
    console.log(this.loginForm.value);
    if (loginForm.valid) {
      this._AuthServiceService.login(loginForm.value).subscribe((response: LoginDto) => {
        console.log(response);
        localStorage.setItem('token', response.token!);
        this._AuthServiceService.SaveCurrentUser();
        this._Router.navigate(['/home']);
        this.loginForm.reset();
      }, (error:HttpErrorResponse) => {
        this.errorFromDB = error.error.Error[0]
        console.log(error);
      });
    }else{
      alert('Please fill the form correctly');
    }
  }
}
