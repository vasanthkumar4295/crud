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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    MainComponent,
    DirectiveComponent,
    LoginComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
