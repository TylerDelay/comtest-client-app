import { TicketService } from '../../../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
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
}

