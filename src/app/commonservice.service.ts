import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient) { }
  GetData(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
