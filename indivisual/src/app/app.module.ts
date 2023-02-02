import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboradComponent } from './pages/admin-dashborad/admin-dashborad.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './pages/user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AuthgaurdGuard } from './core/guards/Authgaurd/authgaurd.guard';
import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { EmployeeDashbordComponent } from './pages/employee-dashbord/employee-dashbord.component';
import { AdminDepartDashbordComponent } from './pages/admin-depart-dashbord/admin-depart-dashbord.component';
import { TableModule } from 'primeng/table';
import { AnimateModule } from 'primeng/animate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarousalComponent } from './service/reusable-component/carousal/carousal.component';
import { MyButtonComponent } from './service/reusable-component/my-button/my-button.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { CustomInterceptor } from './core/interfaces/custom.interceptor';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { AdminDeptLayoutComponent } from './pages/admin-dept-layout/admin-dept-layout.component';
import { EmployeeLayoutComponent } from './pages/employee-layout/employee-layout.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboradComponent,
    UserComponent,
    EmployeeComponent,
    CreateRequestComponent,
    DepartmentComponent,
    ReportsComponent,
    EmployeeDashbordComponent,
    AdminDepartDashbordComponent,
    CarousalComponent,
    MyButtonComponent,
    LeaveComponent,
    AdminLayoutComponent,
    AdminDeptLayoutComponent,
    EmployeeLayoutComponent,
    ApproveLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    AnimateModule,
    BrowserAnimationsModule


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi:true
    },
    AuthgaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
