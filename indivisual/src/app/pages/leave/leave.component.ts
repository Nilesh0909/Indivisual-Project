import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  createLeave: boolean = false;
  leaveArr: any[] = [];
  leavesApproveArr: any[] = [];
  loggedUserData: any;
  addLeaveObj = {
    "LeaveId": 0,
    "EmployeeId": 0,
    "FromDate": new Date(),
    "ToDate": new Date(),
    "IsHalfDay": true,
    "NoOfDays": 0,
    "LeaveType": "",
    "Details": "",
    "IsApproved": true,
    "ApprovedDate": new Date()
  };
  LeavesApprovalBySuperwiserObj = {
    "EmployeeId": 0,
    "EmployeeName": "",
    "ContactNo": "",
    "EmailId": "",
    "Role": "",
    "UserName": "",
    "Password": "",
    "DeptId": 0,
    "ReportsTo": 0
  }


  constructor(private http:HttpClient) {
    this.leaveArr = [];
    // this.addLeaveObj = new addLeaveObject();
    const localData = localStorage.getItem('reqObj');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      this.addLeaveObj.EmployeeId = this.loggedUserData.EmployeeId;
    };
    // this.leaveObj = new leaveObject();
    // this.LeavesApprovalBySuperwiserObj = new LeavesApprovalBySuperwiserObject();
  }

  ngOnInit(): void {
    if (this.loggedUserData.Role == 'admin' || this.loggedUserData.Role == 'Admin') {
      this.getAllLeaves();
    } else if (this.loggedUserData.Role == 'employee' || this.loggedUserData.Role == 'Employee' || this.loggedUserData.Role == 'adminDept' || this.loggedUserData.Role == 'AdminDept' || this.loggedUserData.Role == 'AdminDep') {
      this.getAllLeavesByEmployeeId();
    }
  }
  getAllLeaves() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAllLeaves").subscribe((res: any) => {
      this.leaveArr = res;
    })
  }

  getAllLeavesByEmployeeId() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAllLeavesByEmployeeId?id=" + this.loggedUserData.EmployeeId).subscribe((res: any) => {
      this.leaveArr = res;
    })
  }

  onShow() {
    this.createLeave = true;
  }

  onCreateLeave() {
    debugger;
    const localData = localStorage.getItem('reqObj');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      this.addLeaveObj.EmployeeId = this.loggedUserData.EmployeeId;
    };
    this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/AddLeave",this.addLeaveObj).subscribe((res: any) => {
      this.getAllLeavesByEmployeeId();
      this.createLeave = false;
    })
  }

  onEdit(item: any) {
    this.addLeaveObj = item;
    this.createLeave = true;
  }

} 