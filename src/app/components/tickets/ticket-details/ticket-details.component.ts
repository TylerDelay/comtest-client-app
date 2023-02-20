import { Ticket } from '../../../model/ticket.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TicketService } from '../../../services/ticket.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent {
  // @Input() ticket: Ticket;
}
