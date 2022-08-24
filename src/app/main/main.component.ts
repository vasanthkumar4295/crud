import { Component, OnInit, TemplateRef} from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {  Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';



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
   id:number
   title:string
   formdata:FormGroup
   

  constructor(private dataservice:CommonserviceService,private modalService: BsModalService,
    private route:Router) {
      
     }

   ngOnInit(): void {
    this.dataservice.myData().subscribe(Response=>{
    this.arrData = Response
    // here edit value
    
    });
    this.formdata=new FormGroup({
      title:new FormControl (""),
      id:new FormControl(),
    
     });
    localStorage.setItem('SeesionUser','vasanth') 
    this.currentItem="hello world"

    
  }
  openModal(data:any) {
    console.log(data)
    
    
    this.formdata.setValue({
      title: data.title,
      id: data.id

    });
   // this.id=data.id;
    //this.title=data.title;
    
    }
 
 
showStyle(){  
    this.showFlag=true;  
}

deletemodel(id):void{
  this.dataservice.deletemodel(id).subscribe((result)=>{
    console.log('result.>',result)
  });
}
  
  onClickSubmit(updatedData:object) {
   
    console.log('inside the data',updatedData);
    this.dataservice.updateData(updatedData).subscribe({
      next: (result => {
         console.log(result)
      })
    })
    this.modalService.hide()
  }
  //deletemodel():void{
   // this.route.navigateByUrl('/register', { state: { hello: 'url routing navigation' } });
  //}
  querymodel():void{
    this.route.navigate(['/register'], { queryParams: { serviceId: 22} });
  }
  addItem(data:any){
    console.log('data come from ',data)
  }
  }
