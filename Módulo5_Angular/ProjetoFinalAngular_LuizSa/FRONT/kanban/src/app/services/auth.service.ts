import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/login.model";
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})

export class AuthService {
     
    constructor(private http: HttpClient,
        ) {
    }

    authorization:string = localStorage.getItem('auth') || '';
    
/*     
    login(username:string, password:string ) {
        console.log("Entrou no AuthService")
        return this.http.post<User>('http://localhost:5000/login', { "login":username, "senha":password })
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
            // .shareReplay(); //
    }
*/
login(user: User ):Observable<User> {
    console.log("Entrou no AuthService")
    return this.http.post<User>('http://localhost:5000/login', user)
        // this is just the HTTP call, 
        // we still need to handle the reception of the token
        // .shareReplay(); //
}  
 
    public setSession(authResult:any) {
        localStorage.setItem('id_token', authResult.idToken);
        
   }

   setToken(auth:string) {
       this.authorization = 'Bearer' + auth;
       localStorage.setItem('auth', this.authorization);
   }

   getToken (username: string, password: string):Observable<User> {
    const headers = new HttpHeaders().set( 'Content-Type', 'application/json')
    const TOKEN_ENDPOINT = "http://localhost:5000/login"
    const body = {login: username, password: password};

    return this.http.post<User>(TOKEN_ENDPOINT, body, {headers: headers})
  }
}
       