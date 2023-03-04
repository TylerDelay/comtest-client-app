import { Component, OnInit, ViewChild,ViewChildren, QueryList, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { TicketService } from 'src/app/services/ticket.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource,MatTable } from '@angular/material/table';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';


import { Ticket } from 'src/app/model/ticket.model';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-nest',
  templateUrl: './test-nest.component.html',
  styleUrls: ['./test-nest.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class TestNestComponent{
//   @ViewChild('outerSort', { static: true }) sort: MatSort;
//   @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
//   @ViewChildren('innerTables') innerTables: QueryList<MatTable<Ticket>>;

//   title = 'tyler_table';
//   displayedColumns: string[] = ['etr_id', 'title', 'alias_etr_id', 'description', 'etr_category', 'etr_type', 'etr_subtype', 'actions'];
//   innerDisplayedColumns: string[] = ['etr_category', 'etr_type', 'etr_subtype', 'actions'];
//   innerInnerDisplayedColumns: string[] = ['etr_id', 'title', 'alias_etr_id', 'description', 'etr_category', 'etr_type', 'etr_subtype', 'actions'];
//   dataSource: MatTableDataSource<Ticket>
//   @ViewChild(MatPaginator) paginator: MatPaginator
//  // @ViewChild(MatSort) sort: MatSort
//   posts: Ticket[];
//   childData: Ticket [] = [];
//   expandedElement: Ticket | null;
//   expandedElements: any[] = [];


//   constructor(private apiService: TicketService, private router: Router, private cd: ChangeDetectorRef) {

//   }

//   ngOnInit() {
//     this.apiService.findAllTickets().subscribe((data) => {
//       // console.log(data);
//       this.posts = data
//       console.log(this.posts);
//       this.dataSource = new MatTableDataSource(this.posts)
//       this.dataSource.paginator = this.paginator
//       // this.dataSource.sort = this.sort

//       this.posts.forEach(ticket => {
//         if (
//           ticket.children &&
//           Array.isArray( ticket.children) &&
//           ticket.children.length
//         ) {
//           this.childData = [
//             ...this.childData,
//             { ...ticket, children: new MatTableDataSource(ticket.children) }
//           ];
//         } else {
//           this.childData = [...this.childData, ticket];
//         }
//         console.log(this.childData, "Child DATAAAA")
//       });
//       this.dataSource = new MatTableDataSource(this.childData);
//       this.dataSource.sort = this.sort;
//     });

//   }


//   applyFilter(filterValue: string) {
//     this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Ticket>).filter = filterValue.trim().toLowerCase());
//   }
//   applyFilter2(value: string) {
//       this.dataSource.filter = value.trim().toLocaleLowerCase();

//       if (this.dataSource.paginator) {
//         this.dataSource.paginator.firstPage();
//       }
//     }


//   toggleRow(element: Ticket) {
//     element.children && (element.children as MatTableDataSource<Ticket>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
//     this.cd.detectChanges();
//     this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Ticket>).sort = this.innerSort.toArray()[index]);
//   }
//   // toggleRow(element: Ticket) {
//   //   element.children &&
//   //   (element.children as MatTableDataSource<Ticket>).data.length
//   //     ? this.toggleElement(element)
//   //     : null;
//   //   this.cd.detectChanges();
//   //   this.innerTables.forEach(
//   //     (table, index) =>
//   //       ((table.dataSource as MatTableDataSource<
//   //         Ticket
//   //       >).sort = this.innerSort.toArray()[index])
//   //   );
//   // }

//   isExpanded(row: Ticket): string {
//     const index = this.expandedElements.findIndex(x => x.title == row.title);
//     if (index !== -1) {
//       return 'expanded';
//     }
//     return 'collapsed';
//   }

//   toggleElement(row: Ticket) {
//     const index = this.expandedElements.findIndex(x => x.title == row.title);
//     if (index === -1) {
//       this.expandedElements.push(row);
//     } else {
//       this.expandedElements.splice(index, 1);
//     }

//     //console.log(this.expandedElements);
//   }
// //new
//   updateTicket(id: number){
//     this.router.navigate(['/editETR', id]);
//   }
//   addTicket(){
//     this.router.navigate(['./dashboard']);
//   }

  }

