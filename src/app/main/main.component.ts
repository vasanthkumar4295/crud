import { Component, OnInit, TemplateRef} from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  constructor(private dataservice:CommonserviceService,private modalService: BsModalService) { }
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
      
    })
  }
  

}
