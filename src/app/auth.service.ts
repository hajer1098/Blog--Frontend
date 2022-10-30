import { Injectable } from '@angular/core';
import { RegisterPayload } from './auth/register-payload';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url ="http://localhost:8080/";


  constructor(private httpClient :HttpClient) { 
    
  }

  register(registerPayload :RegisterPayload): Observable <any>{
    //four 3 parameters 1 baseurl , tp url, class to call  backend
    return this.httpClient.post(this.url+"signup", registerPayload);
  }
}
