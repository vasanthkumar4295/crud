import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.less']
})
export class LazyComponent implements OnInit {

 constructor(){}
  ngOnInit(): void {
    const obs$= new Observable (obs =>{
      console.log("start Observable");
      obs.next('100');
      obs.next('vasanth')
      obs.error('error')
      obs.next('vishnu')
      console.log("End Observable");

    });
     obs$.subscribe(sub =>{
      console.log(sub);
     });
  }

}
