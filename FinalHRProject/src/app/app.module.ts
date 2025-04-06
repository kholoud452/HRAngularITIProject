import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { GeneralSettingComponent } from './Components/general-setting/general-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { OfficialVacationsComponent } from './Components/official-vacations/official-vacations.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { DepartmentComponent } from './Components/department/department.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { SalaryReportComponent } from './Components/salary-report/salary-report.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './Components/side-navbar/side-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeneralSettingComponent,
    HomeComponent,
    OfficialVacationsComponent,
    AttendanceComponent,
    AddUserComponent,
    DepartmentComponent,
    EmployeeComponent,
    NotfoundComponent,
    SalaryReportComponent,
    TopNavbarComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
