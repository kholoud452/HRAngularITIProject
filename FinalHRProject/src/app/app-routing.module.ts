import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralSettingComponent } from './Components/general-setting/general-setting.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { DepartmentComponent } from './Components/department/department.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { OfficialVacationsComponent } from './Components/official-vacations/official-vacations.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { SalaryReportComponent } from './Components/salary-report/salary-report.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'official-vacations', component: OfficialVacationsComponent},
  {path: 'general-setting', component: GeneralSettingComponent},
  {path: 'salary-report', component: SalaryReportComponent},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
