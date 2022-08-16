import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }
register(){
  this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
