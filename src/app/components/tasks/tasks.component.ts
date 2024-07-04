import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
    tasks:Task[]=[];
    showMore = false;
    itemsPerRow = 4;
    selectedButton: string = 'Today';  
    faAngleUp = faAngleUp;
    faAngleDown = faAngleDown;

    constructor(private taskService: TaskService,private cdr: ChangeDetectorRef){}

    ngOnInit(): void{      
      this.loadTasks(this.selectedButton);
    }
    selectButton(button: string) {
      this.selectedButton = button;
      this.loadTasks(this.selectedButton);
    }

    loadTasks(selectedDuration: string){
      switch(selectedDuration){
        case 'Today':
          this.taskService.getTasksToday().subscribe((t)=>{
            this.tasks=t;
            this.cdr.detectChanges();
          });
          break;
        case 'All Time':
          this.taskService.getTasksAllTime().subscribe((t)=>this.tasks=t);
          break;
        case 'This Month':
          this.taskService.getTasksThisMonth().subscribe((t)=>this.tasks=t);
          break;
        case 'This Year':
          this.taskService.getTasksThisYear().subscribe((t)=>this.tasks=t);
          break;
        default:
          this.taskService.getTasksToday().subscribe((t)=>this.tasks=t);
      
      }
    }
    
    toggleShowMore(){
      this.showMore  = !this.showMore;
    }

    get visibleTasks(): Task[]{
      return this.showMore? this.tasks : this.tasks.slice(0, this.itemsPerRow);
    }

    get showMoreButtonVisible(): boolean{
      return this.tasks.length > this.itemsPerRow;
    }

}
