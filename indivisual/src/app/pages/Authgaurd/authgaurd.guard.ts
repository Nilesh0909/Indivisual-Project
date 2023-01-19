import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {
  userInfo:any=localStorage.getItem('token');
  
  constructor(private router :Router){
    
  }
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    if(this.userInfo!= null){
      return true;
    }else{
      return false
      this.router.navigateByUrl('login')
    }
  }
  
}
