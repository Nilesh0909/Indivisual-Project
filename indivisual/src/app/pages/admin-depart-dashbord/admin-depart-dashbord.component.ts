import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-depart-dashbord',
  templateUrl: './admin-depart-dashbord.component.html',
  styleUrls: ['./admin-depart-dashbord.component.css']
})
export class AdminDepartDashbordComponent implements OnInit {

  constructor(private router: Router){

  }
  ngOnInit(): void {
    
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

}
