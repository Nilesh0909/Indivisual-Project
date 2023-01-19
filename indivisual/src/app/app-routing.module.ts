import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AdminDashboradComponent } from './pages/admin-dashborad/admin-dashborad.component';
import { AuthgaurdGuard } from './pages/Authgaurd/authgaurd.guard';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { RequestListComponent } from './pages/request-list/request-list.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AdminDepartDashbordComponent } from './pages/admin-depart-dashbord/admin-depart-dashbord.component';
import { EmployeeDashbordComponent } from './pages/employee-dashbord/employee-dashbord.component';

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
    path:'admin-dashborad',
    component:AdminDashboradComponent,
    canActivate:[AuthgaurdGuard],
    children:[
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'cerateRequest',
        component:CreateRequestComponent
      },
      {
        path:'department',
        component:DepartmentComponent
      },
      {
        path:'requestList',
        component:RequestListComponent
      },
      {
        path:'reports',
        component:ReportsComponent
      }
    ]
  },
  {
    path:'admin-depart-dashbord',
    component:AdminDepartDashbordComponent,
    canActivateChild:[AuthgaurdGuard],
    children:[
      {
        path:'create-request',
        component:CreateRequestComponent

      }
    ]
  },
  {
    path:'employee-dashbord',
    component:EmployeeDashbordComponent,
    canActivateChild:[AuthgaurdGuard],
    children:[
      {
        path:'employee',
        component:EmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
