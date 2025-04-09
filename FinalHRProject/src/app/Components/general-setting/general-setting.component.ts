import { Component, OnInit } from '@angular/core';
import { GeneralSettingServiceService } from '../../Services/general-setting-service.service';
import { IGeneralSettingDTO } from '../../Models/generalSettinsDTO';
import { IGeneralSettingForUpdateDTO } from '../../Models/generalSettingForUpdate';
import { response } from 'express';

@Component({
  selector: 'app-general-setting',
  standalone: false,
  templateUrl: './general-setting.component.html',
  styleUrl: './general-setting.component.css'
})

export class GeneralSettingComponent implements OnInit {
  isSaveBtnVusible : Boolean = true;
  isUpdateBtnVusible : Boolean = false;
  allGeneralSettings: IGeneralSettingForUpdateDTO[] = [];
  generalSettingID : number =0;
  Days = [
    { value: 0, name: '' },
    { value: 1, name: 'Saturday' },
    { value: 2, name: 'Sunday' },
    { value: 3, name: 'Monday' },
    { value: 4, name: 'Tuesday' },
    { value: 5, name: 'Wednesday' },
    { value: 6, name: 'Thursday' },
    { value: 7, name: 'Friday' }
  ]

  generalSetting: IGeneralSettingDTO ={
    overTime: 0,
    deduction: 0,
    weeklyHoliday1: 0,
    weeklyHoliday2: 0 ,
  }
  constructor(private _GeneralSettingServiceService:GeneralSettingServiceService) { }

  ngOnInit(): void {
   this.getAllGeneralSettings(); 
   }

 getAllGeneralSettings() {
  this._GeneralSettingServiceService.getAllGeneralSettings().subscribe((response: IGeneralSettingForUpdateDTO[])=>{
    this.allGeneralSettings = response.filter(deleted => deleted.isDeleted !== true);
    console.log(this.allGeneralSettings);
  })
 }
  addGeneralSetting() {
    const settingToSend: IGeneralSettingDTO = {
      overTime: Number(this.generalSetting.overTime),
      deduction: Number(this.generalSetting.deduction),
      weeklyHoliday1: Number(this.generalSetting.weeklyHoliday1),
      weeklyHoliday2: Number(this.generalSetting.weeklyHoliday2)
    };
    console.log(settingToSend);
    this._GeneralSettingServiceService.addGeneralSetting(settingToSend).subscribe((response: IGeneralSettingDTO)=>{
      console.log(response);
      this.getAllGeneralSettings();
      this.emptyData();
    })
  }
 
  emptyData(){
    this.generalSetting = {
      overTime: 0,
      deduction: 0,
      weeklyHoliday1: 0,
      weeklyHoliday2: 0
    }
  }
  Edit(generalID:number){
    this.generalSettingID = generalID;
    console.log(this.generalSettingID );
    this.isSaveBtnVusible = false;
    this.isUpdateBtnVusible = true;
    this._GeneralSettingServiceService.getGeneralSettingById(this.generalSettingID ).subscribe((response:IGeneralSettingForUpdateDTO)=>{
      this.generalSetting = {
        overTime: response.overTime,
        deduction: response.deduction,
        weeklyHoliday1: response.weeklyHoliday1,
        weeklyHoliday2: response.weeklyHoliday2
      }
    })

  }
  updateGeneralSetting() {
    const settingToUpdate: IGeneralSettingForUpdateDTO = {
      id:this.generalSettingID,
      overTime: Number(this.generalSetting.overTime),
      deduction: Number(this.generalSetting.deduction),
      weeklyHoliday1: Number(this.generalSetting.weeklyHoliday1),
      weeklyHoliday2: Number(this.generalSetting.weeklyHoliday2)
    };
    console.log(settingToUpdate);
    this._GeneralSettingServiceService.updateGeneralSetting(this.generalSettingID, settingToUpdate).subscribe((response: IGeneralSettingForUpdateDTO) => {
      console.log(response);
      this.getAllGeneralSettings();
      this.isSaveBtnVusible = true;
      this.isUpdateBtnVusible = false;
      this.emptyData();
    });
  }
  deleteGeneralSetting(id: number) {
    this._GeneralSettingServiceService.deleteGeneralSetting(id).subscribe((response: IGeneralSettingForUpdateDTO) => {
      console.log(response);
      this.getAllGeneralSettings();
    });
  }

}
