import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  isSidePanelOpen:boolean=false;
  userArray:any[]=[];
  userObject:any={    
      "UserId": 0,
      "Role": " ",
      "UserName": " ",
      "Password": " ",
      "DeptId": 0,
      "ReportsTo": 0,
      "EmployeeId": 0
    }
  
  constructor(private http:HttpClient){
  }
   ngOnInit(): void {
    this.getUser(); 
  }
  getUser(){
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetUsers').subscribe((result:any)=>{
      this.userArray=result;
    })
  }
  onAddForm(){
    this.isSidePanelOpen=true;
  }
  onCloseSidePanel(){
    this.isSidePanelOpen=false;
  }

}
