import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Ticket} from '../model/ticket.model';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TicketService {
   baseUri:string = 'http://localhost:8080/api/tickets';
   headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }


  findAllTickets(){
    // let url = `${baseUrl}`;
    return this.http.get<Ticket[]>(`${this.baseUri}`);
  }
  // findAllTickets(): Observable<Ticket[]>{
  //   let url = `${baseUrl}`;
  //   return this.http.get<Ticket[]>(url);
  // }

  getOrder(id): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
    // Update Order
    updateOrder(id, data): Observable<any> {
      let url = `${this.baseUri}/${id}`;
      return this.http.put(url, data, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }
  updateTicket(id: number, ticket: Ticket): Observable<any>{
    return this.http.post(`${this.baseUri}/${id}`, ticket);
  }
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

   // Error handling
   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
