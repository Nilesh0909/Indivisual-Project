import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dept-layout',
  templateUrl: './admin-dept-layout.component.html',
  styleUrls: ['./admin-dept-layout.component.css']
})
export class AdminDeptLayoutComponent implements OnInit{

  loggedUserData: any;
  constructor() {
    const localData =  localStorage.getItem('reqObj');
    if(localData!= null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }
  ngOnInit(): void {
    
  }
}
