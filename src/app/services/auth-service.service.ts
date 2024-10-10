import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(data: any):Observable<any>{
    console.log(data);
    return this.http.post(environment.apiUrl + "/auth/login", data);
  }

  signUp(date: any):Observable<any>{
    return this.http.post(environment.apiUrl + "/auth/signUp", date);
  }
}
