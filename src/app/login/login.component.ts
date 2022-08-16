import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  login(){
    this.router.navigate(['/register'])
  }

  ngOnInit(): void {
  }

}
