import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  getEmployee(){
  //  this.$employee=this.getEmployee();
     this.service.getEmployee().subscribe((res:any)=>{
       this.empArray=res;
     })
  }
  saveEmployee(){
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
  
  loadDept(){
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartments').subscribe((res:any)=>{
      this.deptArray=res;
    })
  }
  getEmpDeptbyId(){
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployeeByDeptId?id='+this.empObject.DeptId).subscribe((res:any)=>{
      this.empArray=res;
    })
  }
  onEdit(id:any){
    this.empObject=id;
    this.isSidePanelOpen=true;
  }
  empUpdate(){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/UpdateEmployee?id='+this.empObject.EmployeeId,this.empObject).subscribe((res: any) => {
      if (res) {
        alert('Employee Updated');
        this.getEmployee();
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(id:any){
    this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/DeleteEmployee?id='+id).subscribe((res:any)=>{
    
    })
  }
 
  addEmployee(){
    this.isSidePanelOpen=true;
  }
  onCloseSidePanel(){
    this.isSidePanelOpen=false;
  }
  oncleare(){
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
  
}
