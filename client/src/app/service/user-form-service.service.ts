import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFormServiceService {

  rootUrl = 'http://localhost:3000/api/users/user/'
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.rootUrl+'allusers')
  }
  registerCall(body:any):Observable<any>{
    return this.http.post(this.rootUrl+'signup',body)
  }

  checkEmail(body:any):Observable<any>{
    return this.http.post(this.rootUrl+'checkEmail',body)
  }
  loginInCall(body:any):Observable<any>{
    return this.http.post(this.rootUrl+'login',body)
  }
}