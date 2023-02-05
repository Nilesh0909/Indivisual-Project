import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
// import { FormControl, FormGroup } from '@angular/forms';
import { MasterService } from 'src/app/core/service/master.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  isApiInProgress:boolean=false;
  selectedDept:string='';
  isSidePanelOpen:boolean=false;
  deptArray:any[]=[];
  $employee:Observable<any[]> |undefined;
 
   deptObject:any={
      "DeptId": 0,
      "DeptName": "", 
      "DeptHead": " ",
      "CreatedDate":new Date()
   };
   empArray:any[]=[];
   empObject:any={
    EmployeeId:0,
    EmployeeName:'',
    ContactNo:'',
    EmailId:'',
    Role:'',
    UserName:'',
    Password:'',
    DeptId: 0,
    ReportsTo: 0
  };
  filteredempArr:any[]=[];
  search: string = '';
  sortMode:  boolean= true;
  subcription:Subscription[]=[];
 
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
    // this.productService.getProductsSmall().then(data => this.products1 = data);
    // this.productService.getProductsSmall().then(data => this.products2 = data);
    // this.productService.getProductsSmall().then(data => this.products3 = data);
    this.getEmployee();
    this.loadDept();
  }


 private getEmployee(){
  //  this.$employee=this.getEmployee();
     this.service.getEmployee().subscribe((res:any)=>{
       this.empArray=res;
       this.filteredempArr=res;
     })
  }
  public onFilter(event:any){
    debugger;
    this.filteredempArr = this.empArray.filter((element:any) => {
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
      this.empArray.sort((a: any, b: any) => a[key].localeCompare(b[key]));
    } else {
      this.sortMode = true;
      this.empArray.sort((a: any, b: any) => b[key].localeCompare(a[key]));
    }
  }

  public saveEmployee(){
    if(this.isApiInProgress == false){
      this.isApiInProgress= true;
      this.service.saveEmp(this.empObject).subscribe((res: any) => {
      this.isApiInProgress = false;  
      if (res) {
          alert('Employee Saved');
          this.getEmployee();
        } else {
          alert(res.message);
        }
      })
    }
   
  }
    // debugger;
    // this.service.saveEmp(this.empObject).subscribe((test:any)=>{
    //   this.getEmployee();
    // })
  
  private loadDept(){
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartments').subscribe((res:any)=>{
      this.deptArray=res;
    })
  }
  public getEmpDeptbyId(){
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployeeByDeptId?id='+this.empObject.DeptId).subscribe((res:any)=>{
      this.empArray=res;
    })
  }
  public onEdit(id:any){
    this.empObject=id;
    this.isSidePanelOpen=true;
  }
  public empUpdate(){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/UpdateEmployee?id='+this.empObject.EmployeeId,this.empObject).subscribe((res: any) => {
      if (res) {
        alert('Employee Updated');
        this.getEmployee();
      } else {
        alert(res.message);
      }
    })
  }

  public onDelete(id:any){
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/DeleteEmployee?id='+id).subscribe((res:any)=>{
    
    })
  }
 
  public addEmployee(){
    this.isSidePanelOpen=true;
  }
  public onCloseSidePanel(){
    this.isSidePanelOpen=false;
  }
  public oncleare(){
    this.empObject ={
      EmployeeName:'',
      ContactNo:'',
      EmailId:'',

      Role:'',
      UserName:'',
      Password:'',
      DeptId: 0,
      ReportsTo: 0
    }; 
  }
  ngOnDestroy():void{
    this.subcription.forEach(element=>{
      element.unsubscribe();
    })
  }
  
}
