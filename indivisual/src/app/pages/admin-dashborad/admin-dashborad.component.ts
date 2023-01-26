import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AnimateModule} from 'primeng/animate';

@Component({
  selector: 'app-admin-dashborad',
  templateUrl: './admin-dashborad.component.html',
  styleUrls: ['./admin-dashborad.component.css']
})
export class AdminDashboradComponent implements OnInit {
  
  
  getAdminDashArr: any[] = [];
  adminObj: any = {
      "totEmp": 0,
      "totDept": 0,
      "totUsers": 0,
      "totRequest": 0,
      "todaysReq": 0,
      "totCompleted": 0,
      "totOpen": 0,
      "totCompletedToday": 0,
      "totOpenToday": 0
  }
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAdminDash();
  }
  getAdminDash() {
    debugger;
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/getAdmminDashboard',this.adminObj).subscribe((res: any) => {
      this.getAdminDashArr = res;
      this.adminObj = this.getAdminDashArr[0];
    })
  }
}
