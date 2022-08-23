import { Injectable, ɵLocaleDataIndex } from '@angular/core';
import{HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
URL="https://jsonplaceholder.typicode.com/todos";

  constructor(private http:HttpClient) { }
  
    myData(){
      return this.http.get(this.URL)
      
    }
    updateData(data:any){
      const body ={
        method:'put',
        body:JSON.stringify({
          id:1,
          title:data.title,
          body:data.title,
          userId:data.id,

        }),
        headers:{
          'content-type':'application/json; charset',
          
        },
        
      }
      return this.http.put('{BASE-URL}/{data.id}',body)
    }
  }

