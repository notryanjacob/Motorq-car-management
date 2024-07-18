import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from './services/data.service';
 
@Injectable({
  providedIn: 'root'
})
export class authGuard  {

  constructor(private router: Router, private dataService: DataService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
      let authUser = this.dataService.getUserAccess();
      if(authUser && authUser ==='1'){
        console.log("true");
        return true;
      }else{
        console.log("false");
        this.router.navigate(['/login']);
        return false;
      }
  }

}
