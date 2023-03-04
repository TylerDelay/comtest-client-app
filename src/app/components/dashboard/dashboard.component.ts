import { Ticket } from 'src/app/model/ticket.model';
import { ChangeDetectorRef, Component, NgZone, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl} from '@angular/cdk/tree';
import { TicketService } from 'src/app/services/ticket.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',

})


export class DashboardComponent implements OnInit {
  submitted = false;
  orderForm: FormGroup;
  StatusProfile:any = ['To-Do', 'In-Progress', 'Complete']
  EtrType:any = ['DEFECT', 'ENHANCEMENT', 'TASK', 'APPROVAL', 'SAMPLE', 'OTHER']
  //dataSource: MatTableDataSource<Ticket>;
  ticketData: any[];
  columnsToDisplay = ['etr_id', 'title', 'description'];
  selectedParentTicketId: number | null = null;
  tickets: any[] =[];

  constructor(public fb: FormBuilder, private router: Router, private ngZone: NgZone, private apiService: TicketService ) {

  }

  ngOnInit() {
    this.apiService.findAllTickets().subscribe(
      (response) => {
        this.tickets = response;
        console.log(this.tickets);
      }
    );
    this.mainForm();
    // console.log(this.tickets);
  }

  mainForm() {
    this.orderForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      etr_category: ['', [Validators.required]],
      etr_type: ['', [Validators.required]],
      etr_subtype: ['', [Validators.required]],
      reporter: ['', [Validators.required]],
      requestor: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      // etr_id: ['', [Validators.required]],
      status: ['', [Validators.required]],
      parent_id: this.selectedParentTicketId
      // createdAt: ['', [Validators.required]]
    })
  }
   // Choose status with select dropdown
   updateProfile(e){
    this.orderForm.get('status').setValue(e, {
      onlySelf: true
    })
  }
    // Getter to access form control
    get myForm(){
      return this.orderForm.controls;
    }

    onSubmit() {
    this.submitted = true;
    if (!this.orderForm.valid) {
      console.log("FAILEDDD");
      return false;

    } else {
      this.apiService.createTicket(this.orderForm.value).subscribe({
        next:(res) => {
          this.ngZone.run(() => this.router.navigate(['/home']));
          console.log(this.orderForm);
        }}
      )



    }
  }

  }



// const TICKETS: Observable<Ticket[]> =[];
