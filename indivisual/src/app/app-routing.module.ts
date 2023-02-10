import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AdminDashboradComponent } from './pages/admin-dashborad/admin-dashborad.component';
import { AuthgaurdGuard } from './core/guards/Authgaurd/authgaurd.guard';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AdminDepartDashbordComponent } from './pages/admin-depart-dashbord/admin-depart-dashbord.component';
import { EmployeeDashbordComponent } from './pages/employee-dashbord/employee-dashbord.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { AdminDeptLayoutComponent } from './pages/admin-dept-layout/admin-dept-layout.component';
import { EmployeeLayoutComponent } from './pages/employee-layout/employee-layout.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:AdminLayoutComponent,
    canActivate:[AuthgaurdGuard],
    children:[
      {
        path:'admin-dashboard',
        component:AdminDashboradComponent
      },
      {
        path:'admin-create-request',
        component:CreateRequestComponent
      },
      {
        path:'admin-employee',
        component:EmployeeComponent
      },
      
      {
        path:'admin-department',
        component:DepartmentComponent
      },
      {

        path:'admin-leave',
        component:LeaveComponent
      },
     
    ]
  },
  {
    path:'',
    component:AdminDeptLayoutComponent,
    canActivate:[AuthgaurdGuard],
    children:[
      {
        path:'admin-dept-dash',
        component:AdminDepartDashbordComponent
      },
      
      {
        path:'dept-create-request',
        component:CreateRequestComponent
      },
      {
        path:'dept-leave',
        component:LeaveComponent
      },
      {
        path:'dept-approve-leave',
        component:ApproveLeaveComponent
      },
      {
        path:'user',
        component:UserComponent
      }
    ]
  },
  {
    path:'',
    component:EmployeeLayoutComponent,
    canActivate:[AuthgaurdGuard],
    children:[
      {
        path:'employee-dashbord',
        component:EmployeeDashbordComponent,
      },
      {
        path:'emp-create-request',
        component:CreateRequestComponent
      },
      {
        path:'emp-leave',
        component:LeaveComponent
      },
      {
        path:'emp-approve-leave',
        component:ApproveLeaveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
