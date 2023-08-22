import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:1337/api/auth/local/register';

  constructor(private http: HttpClient){}
  signin(credentials:any):any{
    return this.http.post(this.url, credentials)
  }
}