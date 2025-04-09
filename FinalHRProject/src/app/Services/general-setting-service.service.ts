import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralSettingDTO } from '../Models/generalSettinsDTO';
import { IGeneralSettingForUpdateDTO } from '../Models/generalSettingForUpdate';

@Injectable({
  providedIn: 'root'
})

export class GeneralSettingServiceService {
  private baseUrl = `https://localhost:7084/api`;
  constructor(private _HttpClient:HttpClient) { }

  getAllGeneralSettings() : Observable<IGeneralSettingForUpdateDTO[]> {
    return this._HttpClient.get<IGeneralSettingForUpdateDTO[]>(`${this.baseUrl}/GeneralSetting`);
  }
  addGeneralSetting(generalSetting: IGeneralSettingDTO): Observable<IGeneralSettingDTO> {
    return this._HttpClient.post<IGeneralSettingDTO>(`${this.baseUrl}/GeneralSetting`, generalSetting);
  }
  updateGeneralSetting(id: number,generalSetting: IGeneralSettingForUpdateDTO): Observable<IGeneralSettingForUpdateDTO> {
    return this._HttpClient.put<IGeneralSettingForUpdateDTO>(`${this.baseUrl}/GeneralSetting/${id}`, generalSetting);
  }
  deleteGeneralSetting(id: number): Observable<any> {
    return this._HttpClient.patch<any>(`${this.baseUrl}/GeneralSetting/${id}`,null);
  }
  getGeneralSettingById(id: number): Observable<IGeneralSettingForUpdateDTO> {
    return this._HttpClient.get<IGeneralSettingForUpdateDTO>(`${this.baseUrl}/GeneralSetting/${id}`);
  }
}
