import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { MasterService } from 'src/app/core/service/master.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedDept:string='';
  isSidePanelOpen:boolean=false;
  deptArray:any[]=[];
  deptObject:any={
      "DeptId": 0,
      "DeptName": "", 
      "DeptHead": " ",
      "CreatedDate":new Date()
    
  };
  empArray:any[]=[];
  empObject:any={
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
    this.service.getEmployee().subscribe((res:any)=>{
      this.empArray=res;
    })
  }
  saveEmployee(){
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/CreateEmployee', this.empObject).subscribe((res: any) => {
      if (res) {
        alert('Employee Saved');
        this.getEmployee();
      } else {
        alert(res.message);
      }
    })
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
 
  addEmployee(){
    this.isSidePanelOpen=true;
  }
  onCloseSidePanel(){
    this.isSidePanelOpen=false;
  }
  
}
