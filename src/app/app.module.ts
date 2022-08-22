import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { DirectiveComponent } from './directive/directive.component';

import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonserviceService } from './commonservice.service';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardService } from './authguard.service';
import { HeadersInterceptor } from './headers.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    MainComponent,
    DirectiveComponent,
    LoginComponent,
    DashboardComponent,
    
  
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule,

    
   

  ],
  providers: [BsModalService,AuthguardService,{
    
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
  } ,
  
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }
