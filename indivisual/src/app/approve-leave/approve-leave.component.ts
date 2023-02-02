import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.css']
})
export class ApproveLeaveComponent implements OnInit{
  leaveArr: any[] = [];
  loggedUserData: any;
  approvelevObj ={
      "LeaveId": 0,
      "EmployeeId": 0,
      "FromDate": "2023-01-30T10:27:12.318Z",
      "ToDate": "2023-01-30T10:27:12.318Z",
      "IsHalfDay": true,
      "NoOfDays": 0,
      "LeaveType": "string",
      "Details": "string",
      "IsApproved": true,
      "ApprovedDate": "2023-01-30T10:27:12.318Z"
  }
  constructor(private http: HttpClient) {
    const localData = localStorage.getItem('reqObj');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      this.approvelevObj.EmployeeId = this.loggedUserData.EmployeeId;
    }
  }
    ngOnInit(): void {
      this.getLeavesForApprovalBySuperviserId();
    }

    onApproveLeave(LeaveId: number) {
      debugger;
      this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/ApproveLeave?id=" +LeaveId, {}).subscribe((res: any) => {
        this.leaveArr = res;
        this.getLeavesForApprovalBySuperviserId();
      })
    }

    getLeavesForApprovalBySuperviserId(){
      this.http.get('https://akbarapi.funplanetresort.in/api/MyRequest/GetLeavesForApprovalBySuperwiserId?id=' + this.loggedUserData.EmployeeId).subscribe((res: any) => {
        this.leaveArr = res;
      })
    }

}

