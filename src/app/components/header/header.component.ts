import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  title: string = 'Car Management System';
  constructor(private dataService: DataService, private router: Router){}
  isUserLoggedIn(): boolean{
    if(localStorage.getItem('isLoggedIn')==='1') return true;
    return false;
  }
  logout(): void{
    this.dataService.logout();
  }

  driverPage(): void{
    this.router.navigate(['/driver']);
  }
}
