import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-depart-dashbord',
  templateUrl: './admin-depart-dashbord.component.html',
  styleUrls: ['./admin-depart-dashbord.component.css']
})
export class AdminDepartDashbordComponent implements OnInit {

  getAdminDeptDashArr: any[] = [];
  // deptArr: any[] = [];
  loggedUserData: any;

  employeeDeptObj: any = {
    "totReq": 0,
    "todaysReq": 0,
    "totCompleted": 0,
    "totOpen": 0,
    "totCompletedToday": 0,
    "totOpenToday": 0
  }
  createReqObj = {
    "RequestId": 0,
    "RequestNo": "",
    "EmployeeId": 0,
    "CreatedDate": "",
    "ExpectedEndDate": "",
    "Severity": "",
    "DeptId": 0,
    "CompletedDate": "",
    "AssignedTo": 0,
    "State": "",
    "RequestDetails": ""
  };

  constructor(private http: HttpClient)  {
    const localData = localStorage.getItem('reqObject');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      this.createReqObj.EmployeeId = this.loggedUserData.EmployeeId;
    }
  }

  ngOnInit(): void {
    this.getEmpDash();
  }
  getEmpDash() {
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetAdminDeptDashboardById?id=' + this.loggedUserData.EmployeeId).subscribe((res: any) => {
      this.getAdminDeptDashArr = res;
      this.employeeDeptObj = this.getAdminDeptDashArr[0];
      console.log(res);
    })
  }

}



