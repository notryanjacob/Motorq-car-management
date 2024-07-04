import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-unused-items',
  templateUrl: './unused-items.component.html',
  styleUrls: ['./unused-items.component.scss']
})
export class UnusedItemsComponent implements OnChanges{
  @Input() selectedButton: string = 'Today';
  tasks: Task[] =[];

  constructor(private taskService: TaskService){}

  ngOnChanges(changes: SimpleChanges): void{
    if(changes['selectedButton'] && changes['selectedButton'].currentValue){
      this.loadUnusedTasks();
    }
  }

  loadUnusedTasks(): void{
    switch(this.selectedButton){
      case 'Today':
        this.taskService.getUnusedTasksToday().subscribe((t)=>this.tasks=t);
        break;
      case 'All Time':
        this.taskService.getUnusedTasksAllTime().subscribe((t)=>this.tasks=t);
        break;
      case 'This Month':
        this.taskService.getUnusedTasksThisMonth().subscribe((t)=>this.tasks=t);
        break;
      case 'This Year':
        this.taskService.getUnusedTasksThisYear().subscribe((t)=>this.tasks=t);
        break;
      default:
        this.taskService.getUnusedTasksToday().subscribe((t)=>this.tasks=t);
    
    }
  }
}   
