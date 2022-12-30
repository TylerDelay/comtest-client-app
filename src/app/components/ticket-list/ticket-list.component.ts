import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from './../../model/ticket.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{

  Order: any = [];

  constructor(private apiService: TicketService) {
    this.readOrder();
  }

  ngOnInit() {}

  readOrder(){
    this.apiService.findAllTickets().subscribe((data) => {
     this.Order = data;
    });
  }

  // removeOrder(order, index) {
  //   if (window.confirm('Are you sure?')) {
  //       this.apiService.deleteOrder(order._id).subscribe((data) => {
  //         this.Order.splice(index, 1);
  //       }
  //     );
  //   }
  // }

}
