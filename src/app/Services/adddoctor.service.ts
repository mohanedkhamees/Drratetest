import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class doctorService {

  constructor(private http: HttpClient) { }

  Adddoctor(doctor: any) {
    return this.http.post('http://localhost:8080/endpoint/add', doctor)
  }
  viewdoctor() {
    return this.http.get('http://localhost:8080/endpoint/')
  }
}
