import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashborad',
  templateUrl: './admin-dashborad.component.html',
  styleUrls: ['./admin-dashborad.component.css']
})
export class AdminDashboradComponent implements OnInit {
  
  constructor(private router:Router){
  }
    ngOnInit(): void {   
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }
 
}
