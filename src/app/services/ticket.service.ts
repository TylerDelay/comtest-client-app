import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import {Ticket} from '../model/ticket.model';



@Injectable({
  providedIn: 'root'
})
export class TicketService {
   baseUri:string = 'http://localhost:8080/api/tickets';
   headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }


  findAllTickets(){
    // let url = `${baseUrl}`;
    return this.http.get(`${this.baseUri}`);
  }
  // findAllTickets(): Observable<Ticket[]>{
  //   let url = `${baseUrl}`;
  //   return this.http.get<Ticket[]>(url);
  // }

  // get(id: any): Observable<Ticket> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
  // create(data: any): Observable<Ticket>{
  //   return this.http.post(baseUrl, data);
  // }
  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findBytitle(etr_id: any): Observable<Ticket[]> {
  //   return this.http.get<Ticket[]>(`${baseUrl}?etr_id=${etr_id}`);
  // }
}
