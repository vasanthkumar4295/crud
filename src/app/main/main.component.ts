import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  showFlag=false;
  arrData:any;


  constructor(private dataservice:CommonserviceService) { }
showStyle(){
  
    this.showFlag=true;
  
}
  ngOnInit(): void {
    this.dataservice.myData().subscribe(Response=>{
      console.log('insides the data', Response)
      
    })
  }

}
