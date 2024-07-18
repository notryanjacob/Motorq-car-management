import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private router: Router) { }

  getUserAccess():string{
    let isUserLoggedIn = localStorage.getItem('isLoggedIn')||'';
    return isUserLoggedIn;
  }
  logout(): void{
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login'])
  }
 
}
