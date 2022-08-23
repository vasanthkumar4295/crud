import { Component, OnInit, TemplateRef} from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Data, Router } from '@angular/router';
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
  
  openModal(data:any) {
   
  
    console.log(data)
   this.id=data.id;
    this.title=data.title;
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

    this.formdata=new FormGroup({
      title:new FormControl (""),
      id:new FormControl(),
    
     });
  }
  
  onClickSubmit(updatedData:object,data:any):void{
    console.log('inside the data',updatedData)
    this.dataservice.updateData(updatedData).subscribe(result=>{
      console.log(data)
      
    })
    this.modalService.hide()

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
