import { Component, OnInit, TemplateRef} from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  showFlag=false;
  arrData:any;
   editData:{}
   modalRef: BsModalRef;
   currentItem:any;

  constructor(private dataservice:CommonserviceService,private modalService: BsModalService,
    private route:Router) { }
  
  openModal(template: TemplateRef<any>,data:any) {
   
    this.modalRef = this.modalService.show(template);
    console.log(data)
    }
 
 
showStyle(){  
    this.showFlag=true;  
}

  ngOnInit(): void {
    this.dataservice.myData().subscribe(Response=>{
      this.arrData = Response
      console.log('insides the data', this.arrData)
      
    });
    localStorage.setItem('SeesionUser','vasanth') 
    this.currentItem="hello world"

  }
  deletemodel():void{
    this.route.navigateByUrl('/register', { state: { hello: 'url routing navigation' } });
  }
  querymodel():void{
    this.route.navigate(['/register'], { queryParams: { serviceId: 22} });
  }
  addItem(data:any){
    console.log('data come from ',data)
  }
  

  
}
