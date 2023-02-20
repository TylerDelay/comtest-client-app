import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  selectedTicket: Ticket;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit() {
    const ticketId = this.route.snapshot.paramMap.get('id');
    this.ticketService.getEtrTicket(ticketId).subscribe(ticket => {
      this.selectedTicket = ticket;
    });
  }
}



