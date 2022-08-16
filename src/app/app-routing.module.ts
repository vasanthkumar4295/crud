import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
  path:'home',
  component: HomeComponent
  },
 {
  path:'login',
  component:LoginComponent
 },
 {
  path:'register',
  component:RegisterComponent
 },
 {
  path:'main',
  component:MainComponent
 },
 {
  path:'directive',
  component:DirectiveComponent
 }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
