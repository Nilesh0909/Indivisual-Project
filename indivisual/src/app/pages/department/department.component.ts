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
    if(test) {
      alert('Department Saved');
      this.getDept();
    } else{
      alert(test.msg);
    }
    
    })
  }

  
  getDeptById(){
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartmentById?id='+this.deptObject.DeptId).subscribe((res:any)=>{
      this.getDept();
    })
  }
  onEdit(item:any){
    this.deptObject =item;
    this.isSidePanelOpen=true;
  }
  updateDept(){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/UpdateDepartment?id='+this.deptObject.DeptId,this.deptObject).subscribe((res:any)=>{
      this.getDept();
    })
  }
  onDelete(id:any){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/DeleteDepartment?id='+id,this.deptObject).subscribe((res:any)=>{
      const index = this.deptArray.findIndex(m=>m.DeptId ==id);
      this.deptArray.splice(index,1);
    })
  }
  addDept(){
    this.isSidePanelOpen=true;
  }
  onCloseSidePanel(){
    this.isSidePanelOpen=false;
  }


}
