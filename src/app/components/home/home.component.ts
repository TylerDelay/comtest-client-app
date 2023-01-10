import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';


import { Ticket } from 'src/app/model/ticket.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  title = 'tyler_table';
  displayedColumns: string[] = ['etr_id', 'title', 'description', 'etr', 'actions'];
  dataSource: MatTableDataSource<Ticket>
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  posts:any


  constructor(private apiService: TicketService) {
    this.apiService.findAllTickets().subscribe((data) => {
      console.log(data);
      this.posts = data

      this.dataSource = new MatTableDataSource(this.posts)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  }

