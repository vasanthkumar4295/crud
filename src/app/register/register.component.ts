import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
forms:FormGroup
  constructor(private router:Router) { }
register(){
  this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.forms=new FormGroup({
      'Username':new FormControl('',Validators.required),
      'Password':new FormControl('',Validators.required)
      
    })
    
  }

}
