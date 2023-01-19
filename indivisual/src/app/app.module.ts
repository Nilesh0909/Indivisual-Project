import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboradComponent } from './pages/admin-dashborad/admin-dashborad.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './pages/user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AuthgaurdGuard } from './pages/Authgaurd/authgaurd.guard';
import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { RequestListComponent } from './pages/request-list/request-list.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { EmployeeDashbordComponent } from './pages/employee-dashbord/employee-dashbord.component';
import { AdminDepartDashbordComponent } from './pages/admin-depart-dashbord/admin-depart-dashbord.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboradComponent,
    UserComponent,
    EmployeeComponent,
   
    CreateRequestComponent,
    RequestListComponent,
    DepartmentComponent,
    ReportsComponent,
    EmployeeDashbordComponent,
    AdminDepartDashbordComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormComponent
  ],
  providers: [
    AuthgaurdGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
