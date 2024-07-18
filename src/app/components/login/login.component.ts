import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginData={
    email: '',
    password: ''
  }

constructor(private router: Router, private dataService : DataService){}

  ngOnInit(): void {
    if(this.dataService.getUserAccess() === '1'){
      this.router.navigate(['/dashboard']);
    }
  }

  onFormSubmit(event:Event):void{
    event.preventDefault();
    let authEmail="admin@upl-ltd.com";
    let authPassword="123";
    if(this.loginData.email && this.loginData.email === authEmail 
      && this.loginData.password && this.loginData.password === authPassword){
      localStorage.setItem('isLoggedIn','1');
      // GO to Dashboard
      this.router.navigate(['/dashboard']);
      

    }else{
      alert('Invalid email or password');
      localStorage.removeItem('isLoggedIn');
    }
  }
}
