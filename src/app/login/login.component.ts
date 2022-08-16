import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  forms:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.forms=new FormGroup({
      'EmailId':new FormControl('',Validators.required),
      'Password':new FormControl('',Validators.required),
      'RepeatPassword':new FormControl('',Validators.required)
      
    })
    
  }

}
