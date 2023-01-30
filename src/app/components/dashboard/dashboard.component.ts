import { Ticket } from 'src/app/model/ticket.model';
import { ChangeDetectorRef, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl} from '@angular/cdk/tree';
import { TicketService } from 'src/app/services/ticket.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class DashboardComponent {

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Ticket>>;


  dataSource: MatTableDataSource<Ticket>;
  ticketData: Ticket[] = [];
  columnsToDisplay = ['etr_id', 'title', 'description'];
  innerDisplayedColumns = ['etr_id', 'title', 'description'];
  expandedElement: Ticket | null;

  constructor(  private cd: ChangeDetectorRef, private apiService: TicketService) {
     this.apiService.findAllTickets().subscribe((data) => {
    console.log(data);
    this.ticketData = data
  });
  }

  ngOnInit() {
    TICKETS.forEach(ticket => {
      if (ticket.children && Array.isArray(ticket.children) && ticket.children.length) {
        this.ticketData = [...this.ticketData, {...ticket, children: new MatTableDataSource(ticket.children)}];
      } else {
        this.ticketData = [...this.ticketData, ticket];
      }
    });
    this.dataSource = new MatTableDataSource(this.ticketData);
    this.dataSource.sort = this.sort;
  }
  toggleRow(element: Ticket) {
    element.children && (element.children as MatTableDataSource<Ticket>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Ticket>).sort = this.innerSort.toArray()[index]);
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Ticket>).filter = filterValue.trim().toLowerCase());
  }



}


const TICKETS: Ticket[] =[];
