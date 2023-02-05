import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { MasterService } from 'src/app/core/service/master.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  isApiInProgress:boolean=false;
  isSidePanelOpen: boolean = false;
  loggedUserData: any;
  departmentList: any[] = [];
  requestList: any[] = [];
  isCreateReq: boolean = false;
  isAssignReq: boolean = false;
  currentReqDeptId: number = 0;
  empBydeptList: any[] = [];

  createReqObj = {
    "RequestId": 0,
    "RequestNo": "",
    "EmployeeId": 0,
    "CreatedDate": "",
    "ExpectedEndDate": "",
    "Severity": "",
    "DeptId": 0,
    "CompletedDate": "",
    "AssignedTo": 0,
    "State": "",
    "RequestDetails": ""
  };
  assignObj = {
    "RequestId": 0,
    "AssignedTo": 0
  };
  constructor(private http: HttpClient) {
    const localData = localStorage.getItem('reqObj');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      this.createReqObj.EmployeeId = this.loggedUserData.EmployeeId;
    }

  }

  ngOnInit(): void {
    this.getDepartments();
    if (this.loggedUserData.Role == 'Admin') {
      this.getAllReq();
    } else if (this.loggedUserData.Role == 'employee' || this.loggedUserData.Role == 'Employee') {
      this.getReqByloggedEmp();
      this.isCreateReq = true;
    } else if (this.loggedUserData.Role == 'AdminDept' || this.loggedUserData.Role == 'AdminDep') {
      this.getAssignReqByEmpId();
    }

  }


  getAssignReqByEmpId() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAssignedRequestByUserId?userid=" + this.loggedUserData.EmployeeId).subscribe((res: any) => {
      this.requestList = res;
    })
  }
  getReqByloggedEmp() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAllRequestByEmployee?id=" + this.loggedUserData.EmployeeId).subscribe((res: any) => {
      this.requestList = res;
    })
  }

  getAllReq() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAllRequest").subscribe((res: any) => {
      this.requestList = res;
      
    })
  }
  // onFilter(event:any){
  //   debugger;
  //   this.filteredcreateArr = this.createReqObj.filter((element:any) => {
  //     let search =event;
  //     let values = Object.values(element);
  //     let flag = false
  //     values.forEach((val: any) => {
  //       if (val.toString().toLowerCase().indexOf(search) > -1) {
  //         flag = true;
  //         return;
  //       }
  //     })
  //     if (flag) {
  //       return element
  //     }
  //   });
  // }

 
  // sort(key : string) {
  //   debugger;
  //   if(this.sortMode) {
  //     this.sortMode = false;
  //     this.createReqObj.sort((a: any, b: any) => a[key].localeCompare(b[key]));
  //   } else {
  //     this.sortMode = true;
  //     this.createReqObj.sort((a: any, b: any) => b[key].localeCompare(a[key]));
  //   }
  // }

  
  
  getDepartments() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartments").subscribe((res: any) => {
      this.departmentList = res;
    })
  }
  getEmployeeByDept() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployeeByDeptId?id=" + this.currentReqDeptId).subscribe((res: any) => {
      this.empBydeptList = res;
    })
  }
  onCreateReq() {
    if(this.isApiInProgress==false){
      this.isApiInProgress= true;
      this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/CreateRequestMaster", this.createReqObj).subscribe((res: any) => {
       this.isApiInProgress= false;
       if(res) {
        alert('Create Request Successfully');
        this.getReqByloggedEmp();
       }else{
        alert(res.message);
       }
      
      })
    }
   
  }

  onAssignEmp() {
    this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/AssignRequest", this.assignObj).subscribe((res: any) => {
      this.getAllReq();
    })
  }
  onStartReq(id: number) {
    this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/startRequest?id=" + id, {}).subscribe((res: any) => {
      this.getAssignReqByEmpId();
    })
  }
  onCloseReq(id: number) {
    this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/closeRequest?id=" + id, {}).subscribe((res: any) => {
      this.getAssignReqByEmpId();
    })
  }

  assign(reqId: number, deptId: number) {
    this.isAssignReq = true;
    this.isCreateReq = false;
    this.assignObj.RequestId = reqId;
    this.currentReqDeptId = deptId;
    this.getEmployeeByDept();
  }

  onClearAssignform() {
    this.assignObj = {
      "RequestId": 0,
      "AssignedTo": 0
    }
  }
  onClearCreateReqForm() {
    this.createReqObj = {
      "RequestId": 0,
      "RequestNo": "",
      "EmployeeId": 0,
      "CreatedDate": "",
      "ExpectedEndDate": "",
      "Severity": "",
      "DeptId": 0,
      "CompletedDate": "",
      "AssignedTo": 0,
      "State": "",
      "RequestDetails": ""
    }
  }


  onAddRequest() {
    // this.isCreateReq = true;
    // this.isAssignReq =false;
  }

  onAssignReqFormClose() {
    // this.isAssignReq =false;
  }

  onCreateReqFormClose() {
    // this.isCreateReq = false;
  }
}





  