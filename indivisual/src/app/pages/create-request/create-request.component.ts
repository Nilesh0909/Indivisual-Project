import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  isSidePanelOpen:boolean=false;
  reqArray:any[]=[];
  reqObject:any={
    "RequestId": 5,
    "RequestNo": "Req-16-17-4",
    "EmployeeId": 17,
    "State": " ",
    "CreatedDate": new Date(),
    "ExpectedEndDate": new Date(),
    "Severity": " ",
    "CompletedDate": null,
    "AssignedUserName": " ",
    "EmployeeName": " "
  }
  constructor(private http:HttpClient, private service:MasterService){

  }

  ngOnInit(): void {
    this.getAllrequest();
  }
  getAllrequest(){
    this.service.getAllRequest().subscribe((res:any)=>{
    this.reqArray=res;
    })
  }

  addEmployee(){
    this.isSidePanelOpen=true;
  }
  onCloseSidePanel(){
    this.isSidePanelOpen=false;
  }

}
