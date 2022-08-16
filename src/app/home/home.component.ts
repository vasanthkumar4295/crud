import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  bookId:number=67;
  bookName:string = "Thulazi";
  author:string="Balakrishnan";
  bookstatus:string="Available";
   btnpropertybinding:boolean =true;
   onpropertybinding(){
    if(this.bookstatus=="Available")
    {
      this.bookstatus="not Available";

    }
    else{this.bookstatus ="Available";}
  
}

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.btnpropertybinding=false;
    },2000);
  }
    

}
