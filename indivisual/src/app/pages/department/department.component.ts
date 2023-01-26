import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { MasterService } from 'src/app/core/service/master.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  isSidePanelOpen:boolean=false;
  deptArray:any[]=[];
  deptObject:any={
  "DeptId": 0,
  "DeptName": "",
  "DeptHead": "",
  "CreatedDate": new Date()
  };
  constructor(private http:HttpClient,private service:MasterService){

  }

  ngOnInit(): void {
    this.getDept();
  }
  getDept(){
    this.service.getDepartment().subscribe((res:any)=>{
      this.deptArray=res;
    })
  }
  saveDept(){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/CreateDepartment',this.deptObject).subscribe((test:any)=>{

    })
  }
  onEdit(id:any){
    this.deptObject=id;
  }
  updateDept(){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/UpdateDepartment?id='+this.deptObject.DeptId,this.deptObject)
  }
  addDept(){
    this.isSidePanelOpen=true;
  }
  onCloseSidePanel(){
    this.isSidePanelOpen=false;
  }


}
