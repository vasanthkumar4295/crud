import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
URL="https://jsonplaceholder.typicode.com/todos";

  constructor(private http:HttpClient) { }
  
    myData(){
      return this.http.get(this.URL)
      console.log('inside the data',Response)
    }
  }

