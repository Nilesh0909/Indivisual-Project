import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';
import { AdminDashboradComponent } from '../admin-dashborad/admin-dashborad.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // logindetails:any;

   loginObj:any={
    username:'',
    password:''
  }
    constructor(private router:Router,private http:HttpClient,private service:MasterService){            
  }
  ngOnInit(): void {
  }
  onLogin(){
    // if(this.loginObj.username=='admin' && this.loginObj.password=='1234' ){
    // this.logindetails=res.data;  
    // if(true){
    // this.router.navigateByUrl('admin-dashborad');
    // }

      this.service.getLogin(this.loginObj).subscribe((res:any)=>{
        localStorage.setItem('token',res.Token) 
     if (res.Role =='Admin') {
      this.router.navigateByUrl('admin-dashborad');

    }
    else if(res.Role =='AdminDep'||res.Role=='AdminDept'){
    this.router.navigateByUrl('admin-depart-dashbord');
    }
    else if(res.Role =='employee'){
    this.router.navigateByUrl('employee-dashbord')
    }
  }) 
}
}