import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent {
  drivers: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllDrivers();
  }

  getAllDrivers(): void {
    this.apiService.getAllDrivers().subscribe(
      (data) => {
        this.drivers = data;
      },
      (error) => {
        console.error('Error fetching drivers:', error);
      }
    );
  }

  acceptAssignment(driver: any): void {
    // Add logic to accept assignment
    console.log('Assignment accepted for driver:', driver);
  }

  rejectAssignment(driver: any): void {
    // Add logic to reject assignment
    console.log('Assignment rejected for driver:', driver);
  }
}
