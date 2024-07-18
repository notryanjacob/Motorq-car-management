import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.scss']
})
export class AddUrlComponent {
    trackableUrl: String="";

    constructor(private taskService: TaskService){}

    onAddUrl(): void{
      if(this.trackableUrl!=""){
      window.alert("Url Added Successfully");
      this.taskService.addTrackableUrl(this.trackableUrl).subscribe((res)=>{
        console.log(">>>",res);
      },
      (err)=>{
        console.log(">>>",err)
      });
    }else{
      alert("Please add a Url");
    }
      console.log(this.trackableUrl);
    }
    
}
