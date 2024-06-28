import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isChecked: Boolean = false;
  selectedButton: string = 'Today';  

  title: string = 'UPL App Productivity Tracker';
  constructor( private dataService: DataService){ }
  
  ngOnInit(): void {
      this.dataService.setCurrentDurationButton(this.selectButton.toString());
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }

}
