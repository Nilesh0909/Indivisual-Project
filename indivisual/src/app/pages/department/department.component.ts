import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { subscribeOn, Subscription } from 'rxjs';
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
  filteredDeptArr:any[]=[];
  search: string = '';
  sortMode:  boolean= true;
  subcription:Subscription[]=[];
  constructor(private http:HttpClient,private service:MasterService){

  }

  ngOnInit(): void {
    this.getDept();
  }
  private getDept(){
    this.service.getDepartment().subscribe((res:any)=>{
      this.deptArray=res;
      this.filteredDeptArr=res;
    
    })
  }
 public onFilter(event:any){
    debugger;
    this.filteredDeptArr = this.deptArray.filter((element:any) => {
      let search =event;
      let values = Object.values(element);
      let flag = false
      values.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(search) > -1) {
          flag = true;
          return;
        }
      })
      if (flag) {
        return element
      }
    });
  }

 
 public sort(key : string) {
    debugger;
    if(this.sortMode) {
      this.sortMode = false;
      this.deptArray.sort((a: any, b: any) => a[key].localeCompare(b[key]));
    } else {
      this.sortMode = true;
      this.deptArray.sort((a: any, b: any) => b[key].localeCompare(a[key]));
    }
  }

 public saveDept(){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/CreateDepartment',this.deptObject).subscribe((test:any)=>{
    if(test) {
      alert('Department Saved');
      this.getDept();
    } else{
      alert(test.msg);
    }
    
    })
  }

  
 public getDeptById(){
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartmentById?id='+this.deptObject.DeptId).subscribe((res:any)=>{
      this.getDept();
    })
  }
  public onEdit(item:any){
    this.deptObject =item;
    this.isSidePanelOpen=true;
  }
  public updateDept(){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/UpdateDepartment?id='+this.deptObject.DeptId,this.deptObject).subscribe((res:any)=>{
      this.getDept();
    })
  }
  public onDelete(id:any){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/DeleteDepartment?id='+id,this.deptObject).subscribe((res:any)=>{
      const index = this.deptArray.findIndex(m=>m.DeptId ==id);
      this.deptArray.splice(index,1);
    })
  }
  public addDept(){
    this.isSidePanelOpen=true;
  }
  public onCloseSidePanel(){
    this.isSidePanelOpen=false;
  }
  ngOnDestroy():void{
    this.subcription.forEach(element=>{
      element.unsubscribe();
    })
  }


}
