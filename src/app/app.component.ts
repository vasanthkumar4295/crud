import { Component } from '@angular/core';
import { CommonserviceService } from './commonservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
 title='Get Values from web api'
 customers:any;
 constructor(private service:CommonserviceService){
this.service.GetData().subscribe(data=>{
console.log(data);
});
 }

 
  

}

