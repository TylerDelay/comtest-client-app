import { Ticket } from '../../../model/ticket.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TicketService } from '../../../services/ticket.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  orderData: Ticket[];
  OrderProfile: any = ['Pending payment', 'Paid', 'Complete', 'Picked Up', 'Anything']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: TicketService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateOrder();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getOrder(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      cost: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      status: ['', [Validators.required]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('status').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getOrder(id) {
    this.apiService.getOrder(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        description: data['description'],
        cost: data['cost'],
        status: data['status'],
      });
    });
  }

  updateOrder() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      cost: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      status: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateOrder(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/orders-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
