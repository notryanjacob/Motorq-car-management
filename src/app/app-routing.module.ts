import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { DriverComponent } from './components/driver/driver.component';

const routes: Routes = [
  {path:'dashboard', component: TasksComponent, canActivate: [authGuard]},
  {path:'login', component: LoginComponent},
  {path:'driver', component: DriverComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
