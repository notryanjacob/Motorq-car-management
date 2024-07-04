import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent{
    @Input() task!: Task;
    
    formatText(title: string): string{
      if(title.length>50){
        return title.slice(0,25)+"..."+title.slice(title.length-25,title.length);
      }
      return title;
    }

    formatDuration(duration: number): string {
      duration=duration*1000;
      const hours = Math.floor(duration / 3600000);
      const minutes = Math.floor((duration % 3600000) / 60000);
      const seconds = Math.floor((duration % 60000) / 1000);

      return `${hours.toString().padStart(2, '0')} hr, ${minutes.toString().padStart(2, '0')} min, ${seconds.toString().padStart(2, '0')}`;
    }
}
