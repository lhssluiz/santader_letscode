import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/login.model";
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Card } from "../models/cards.model";



@Injectable({
    providedIn: 'root'
})

export class ApiServices {

    private token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2MzgxMTM5NTMsImV4cCI6MTYzODExNzU1M30.RkjBSsu4AJXYmsq1YqDw7S2gf8pM25NUwYTjOXSJv_A"
    
    constructor (private http: HttpClient) {

    }

    headers = {
        'Content-Type': 'application/json',
        Authorization: this.token,
      };

    getAllCards(){
        const url = "http://localhost:5000/cards";
        const options = {headers: this.headers};
        return this.http.get<Card>(url,options)

    }

}

