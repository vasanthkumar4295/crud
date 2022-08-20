import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
forms:FormGroup
  constructor(private router:Router,private activateRouter:ActivatedRoute  ) { 
    const data = this.router.getCurrentNavigation()?.extras?.state?.['hello']
    console.log('inside the data',data)
  }
register(){
  this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.forms=new FormGroup({
      'Username':new FormControl('',Validators.required),
      'Password':new FormControl('',Validators.required)
      
    });
    this.activateRouter
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        console.log('inside the params', params)
      });
  }

}
