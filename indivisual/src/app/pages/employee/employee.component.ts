import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  isSidePanelOpen:boolean=false;
  empArray:any[]=[];
  empObject:any={
    "EmployeeId": 0,
    "EmployeeName": " ",
    "ContactNo": " ",
    "EmailId": " ",
    "CompanyId": 0
  }

    // userForm : FormGroup;
  constructor(private http:HttpClient,private service :MasterService){

    //   this.userForm = new FormGroup({
    //   EmployeeId: new FormControl(),
    //   EmployeeName:new FormControl(),
    //   ContactNo: new FormControl(),
    //   EmailId: new FormControl()
    // });
 }
  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee(){
    this.service.getEmployee().subscribe((res:any)=>{
      this.empArray=res;
    })
  }
  saveEmployee(){
    this.service.saveEmp(this.empObject).subscribe((test:any)=>{
      
    })
  }
  addEmployee(){
    this.isSidePanelOpen=true;
  }
  onCloseSidePanel(){
    this.isSidePanelOpen=false;
  }
  
}
