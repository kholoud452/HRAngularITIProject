import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralSettingDTO } from '../Models/generalSettinsDTO';

@Injectable({
  providedIn: 'root'
})

export class GeneralSettingServiceService {
  private baseUrl = `https://localhost:7084/api`;
  constructor(private _HttpClient:HttpClient) { }

  getAllGeneralSettings() : Observable<IGeneralSettingDTO[]> {
    return this._HttpClient.get<IGeneralSettingDTO[]>(`${this.baseUrl}/GeneralSetting/GetGeneralSetting`);
  }
  addGeneralSetting(generalSetting: IGeneralSettingDTO): Observable<IGeneralSettingDTO> {
    return this._HttpClient.post<IGeneralSettingDTO>(`${this.baseUrl}/GeneralSetting/AddGeneralSetting`, generalSetting);
  }
  updateGeneralSetting(id: number,generalSetting: IGeneralSettingDTO): Observable<IGeneralSettingDTO> {
    return this._HttpClient.put<IGeneralSettingDTO>(`${this.baseUrl}/GeneralSetting/UpdateGeneralSetting${id}`, generalSetting);
  }
  deleteGeneralSetting(id: number): Observable<void> {
    return this._HttpClient.delete<void>(`${this.baseUrl}/GeneralSetting/${id}`);
  }
  getGeneralSettingById(id: number): Observable<IGeneralSettingDTO> {
    return this._HttpClient.get<IGeneralSettingDTO>(`${this.baseUrl}/GeneralSetting/GetGeneralSettingByID${id}`);
  }
}
