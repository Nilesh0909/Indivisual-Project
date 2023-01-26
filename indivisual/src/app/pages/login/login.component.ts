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

   loginObj:any={
    "UserName":"",
    "Password":""
  }
    constructor(private router:Router,private http:HttpClient,private service:MasterService){            
  }
  ngOnInit(): void {
  }
  onLogin(){
      this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/Login',this.loginObj).subscribe((test:any)=>{
      debugger;
      localStorage.setItem('reqObject',JSON.stringify(test));
      localStorage.setItem('token',test.Token)
      if(test.Role =='admin') {
      this.router.navigateByUrl('admin-dashboard');
    }
    else if(test.Role =='AdminDep'||test.Role=='AdminDept'){
    this.router.navigateByUrl('admin-dept-dash');
    }
    else if(test.Role =='employee' || test.Role=='Employee'){
    this.router.navigateByUrl('employee-dashbord')
    }
  }) 
}
}