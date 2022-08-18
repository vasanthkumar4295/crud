import { Component } from '@angular/core';
import { CommonserviceService } from './commonservice.service';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
Data:any=[];
 title='Get Values from web api'
 
 constructor(private service:CommonserviceService){
this.service.GetData().subscribe(data=>{
console.log(data);

this.Data=data;
});


 }

 
  

}

