import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getLogin(obj:any):Observable<any>{
    return this.http.post<any>('https://akbarapi.funplanetresort.in/api/MyRequest/Login',obj)

  }
  getEmployee():Observable<any[]>{
    return this.http.get<any[]>('https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployees')
  }
  saveEmp(empObject:any){
    return this.http.post<any>('https://akbarapi.funplanetresort.in/api/MyRequest/CreateEmployee',empObject)
  }
  
  getAllRequest():Observable<[]>{
    return this.http.get<any>('https://akbarapi.funplanetresort.in/api/MyRequest/GetAllRequest')

  }

  getDepartment():Observable<any[]>{
    return this.http.get<any>('https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartments')
  }
}
