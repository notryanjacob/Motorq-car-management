import { Component, OnChanges } from '@angular/core';
import { Task } from 'src/app/Task';
import { DataService } from 'src/app/services/data.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
    tasks: Task[] = [];
    showMore = false;
    itemsPerRow = 4;
    currentDurationBtn: string="Today";

    constructor(private taskService: TaskService,
                private data: DataService
    ){}

    ngOnInit(): void{
      this.data.currentDurationButton$.subscribe(currentButton=> 
        {
          this.currentDurationBtn = currentButton;
          console.log(currentButton);
        }
      );
      this.loadTasks(); 
    }

    loadTasks(){
      switch(this.currentDurationBtn){
        case "Today":
          this.taskService.getTasksToday().subscribe((tasks)=>this.tasks = tasks);
          break;
        case "All Time":
          this.taskService.getTasksAllTime().subscribe((tasks)=>this.tasks = tasks);
          break;
        case "This Month":
          this.taskService.getTasksThisMonth().subscribe((tasks)=> this.tasks = tasks);
          break;
        case 'This Year':
          this.taskService.getTasksThisYear().subscribe((t)=> this.tasks=t);
          break;
        default:
          this.taskService.getTasksToday().subscribe((t)=>this.tasks = t);
      }
    }
    
    toggleShowMore(){
      // console.log(this.currentDurationBtn,this.tasks);
      this.showMore  = !this.showMore;
    }

    get visibleTasks(): Task[]{
      return this.showMore? this.tasks : this.tasks.slice(0, this.itemsPerRow);
    }

    get showMoreButtonVisible(): boolean{
      return this.tasks.length > this.itemsPerRow;
    }

}
