import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {
 
  // userInfo: any = localStorage.getItem('reqObject');
  loginDetails=localStorage.getItem('reqObject');

  constructor(private route: Router) {
    ;
  }
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginDetails != null) {
      return true;
    } else {
      this.route.navigateByUrl("Login")
      return false;
    }
  }

}


