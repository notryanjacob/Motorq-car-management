import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  title: string = 'UPL App Productivity Tracker';
  constructor(private dataService: DataService){ }
  isUserLoggedIn(): boolean{
    if(localStorage.getItem('isLoggedIn')==='1') return true;
    return false;
  }
  logout(): void{
    this.dataService.logout();
  }
}
