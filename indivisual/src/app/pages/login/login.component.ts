import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/core/service/master.service';
import { AdminDashboradComponent } from '../admin-dashborad/admin-dashborad.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // logindetails:any;

  loginObj: any = {
    "UserName": "",
    "Password": ""
  }
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    debugger;
    this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/Login", this.loginObj).subscribe((res: any) => {
      localStorage.setItem('reqObj', JSON.stringify(res));
      localStorage.setItem('token', res.Token);
      if (res.Role == "admin" || res.Role == "Admin") {
        this.router.navigateByUrl('admin-dashboard')
      } else if (res.Role == "Employee" || res.Role == 'employee') {
        this.router.navigateByUrl('employee-dashbord')
      } else if (res.Role == ' AdminDep' || res.Role == 'AdminDept') {
        this.router.navigateByUrl('admin-dept-dash')
      }
    })
  }
}

