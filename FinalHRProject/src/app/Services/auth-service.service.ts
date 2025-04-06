import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../Models/loginDTO';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  private baseUrl = `https://localhost:7084/api`;
  userDta = new BehaviorSubject<LoginDto | null>(null);
  userId :string  = '';

  constructor(private _Httpclient:HttpClient,private _Router:Router) { }

 login(loginData:LoginDto) : Observable<LoginDto>{
  return this._Httpclient.post<LoginDto>(`${this.baseUrl}/Account/Login`, loginData);
 }
 SaveCurrentUser() {
  this.userDta.next(jwtDecode(JSON.stringify(localStorage.getItem('token'))));
  this.userId = this.userDta.value?.nameid || '';
 }
 Logout(){
  if (this.userDta.value) {
  localStorage.removeItem('token');
  this.userDta.next(null);
  this._Router.navigate(['/login']);
}else{
  console.log('userDta is null');
  }
 }

}

