import { Component } from '@angular/core';
import { Driver } from 'src/Driver';
import { ApiService } from 'src/app/services/api.service';
import { vehicleAssign } from 'src/vehicleAssign.model';

@Component({
  selector: 'app-driver-creation',
  templateUrl: './driver-creation.component.html',
  styleUrls: ['./driver-creation.component.scss']
})
export class DriverCreationComponent {
  driver: Driver={
    name:'',
    email:'',
    phoneNumber:'',
    location:''
  }
  va :vehicleAssign={
    name:'',
    licensePlate:'',
    startTime:0,
    endTime:0
  }
  searchQueryName :string='';
  searchQueryLocation: string='';
  DriverName: Driver={name:'',email:'',phoneNumber:''};

constructor( private apiService : ApiService){}

  ngOnInit(): void {
  }

  onFormSubmit(event:Event):void{
    event.preventDefault();
    

      this.apiService.addDriver(this.driver).subscribe(response => {
        console.log('Driver added successfully:', response);
        alert('Driver Created ');
        this.driver ={
          name:'',
          email:'',
          phoneNumber:'',
          location:''
        }
        
      }, error => {
        console.error('Error adding driver:', error);
      });
  }
  onVehicleAssign(): void {
    this.apiService.assignVehicle(this.va)
      .subscribe(res => {
        console.log('Driver assigned successfully:', res);
        alert('Driver assigned successfully');
        this.va = {
          name: '',
          licensePlate: '',
          startTime: 0,
          endTime: 0
        };
      }, error => {
        console.error('Error assigning driver:', error); 
      });
  }
  
  searchName() {

      this.apiService.getDriverByName(this.searchQueryName).subscribe(
        (response: Driver) => {
          this.DriverName = response;

        },
        (error) => {
          console.error('Error fetching drivers:', error);
        }
      );
    }
    

  // searchLocation(){
  //   this.apiService.getDriversByLocation(this.searchQueryLocation).subscribe(
  //     (response: Driver) => {
  //       this.DriverName = response;

  //     },
  //     (error) => {
  //       console.error('Error fetching drivers:', error);
  //     }
  //   );
  }
