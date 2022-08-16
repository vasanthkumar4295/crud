import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { DirectiveComponent } from './directive/directive.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
  
    RegisterComponent,
       MainComponent,
       DirectiveComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
