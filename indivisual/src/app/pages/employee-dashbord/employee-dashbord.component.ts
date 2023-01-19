import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashbord',
  templateUrl: './employee-dashbord.component.html',
  styleUrls: ['./employee-dashbord.component.css']
})
export class EmployeeDashbordComponent implements OnInit {
  constructor(private route:Router){

  }
  ngOnInit(): void {
    
  }
  onLogout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('login');
  }

}
