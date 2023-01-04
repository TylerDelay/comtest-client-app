import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
