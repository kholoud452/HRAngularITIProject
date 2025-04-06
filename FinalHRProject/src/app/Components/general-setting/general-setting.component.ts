import { Component, OnInit } from '@angular/core';
import { GeneralSettingServiceService } from '../../Services/general-setting-service.service';
import { IGeneralSettingDTO } from '../../Models/generalSettinsDTO';

@Component({
  selector: 'app-general-setting',
  standalone: false,
  templateUrl: './general-setting.component.html',
  styleUrl: './general-setting.component.css'
})

export class GeneralSettingComponent implements OnInit {
  Days = [
    { id: 0, name: 'Saturday' },
    { id: 1, name: 'Sunday' },
    { id: 2, name: 'Monday' },
    { id: 3, name: 'Tuesday' },
    { id: 4, name: 'Wednesday' },
    { id: 5, name: 'Thursday' },
    { id: 6, name: 'Friday' }
  ]
  allGeneralSettings: IGeneralSettingDTO[] = [];
  generalSetting: IGeneralSettingDTO ={
    overTime: 0,
    deduction: 0,
    weeklyHoliday1: 0 .valueOf(),
    weeklyHoliday2: 0 .valueOf(),
  }


  constructor(private _GeneralSettingServiceService:GeneralSettingServiceService) { }

  ngOnInit(): void {
   this.getAllGeneralSettings(); 
   }

 getAllGeneralSettings() {
  this._GeneralSettingServiceService.getAllGeneralSettings().subscribe((response: IGeneralSettingDTO[])=>{
    this.allGeneralSettings = response;
    console.log(this.allGeneralSettings);
  })
 }
  addGeneralSetting() {
    console.log(this.generalSetting);
    this._GeneralSettingServiceService.addGeneralSetting(this.generalSetting).subscribe((response: IGeneralSettingDTO)=>{
      console.log(response);
      this.getAllGeneralSettings();
    })
  }
  updateGeneralSetting(id: number, generalSetting: IGeneralSettingDTO) {
    this._GeneralSettingServiceService.updateGeneralSetting(id, generalSetting).subscribe((response: IGeneralSettingDTO)=>{
      console.log(response);
      this.getAllGeneralSettings();
    })
  }
  deleteGeneralSetting(id: number) {
    this._GeneralSettingServiceService.deleteGeneralSetting(id).subscribe((response: void)=>{
      console.log(response);
      this.getAllGeneralSettings();
    })
  }

}
