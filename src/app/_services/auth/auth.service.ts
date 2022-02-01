import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
interface Person {
 person:{ _id:string;
  email:string;
  password:string;
  __v:0;
  id:string;
 };
 token:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  login(body:any):Observable<Person>{
   return this.httpClient.post<Person>(environment.baseUrl+'user/login',body)
  }
}
