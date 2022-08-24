import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {
  path:'home',
  component: HomeComponent
  },
 
 {
  path:'register',
  component:RegisterComponent,canActivate:[AuthenticationGuard]
 },
 {
  path:'dashboard',
  component:DashboardComponent
 },
 
 {
  path:'directive',
  component:DirectiveComponent
 },
 {
  path:'blog', 
  loadChildren:() => import('./blog/blog.module').then(m=> m.BlogModule )
},
 {
  path:'main',
  component:MainComponent,
 },
 {
  path:'login',
  component:LoginComponent
 },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
