import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Ticket } from 'src/app/model/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-edit-etr',
  templateUrl: './edit-etr.component.html',
  styleUrls: ['./edit-etr.component.css']
})
export class EditETRComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  orderData: Ticket[];
  OrderProfile: any = ['To-Do', 'In-Progress', 'Complete']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: TicketService,
    private router: Router
  ) {}

  ngOnInit() {
   // this.updateEtr();
    console.log(this.actRoute.snapshot.paramMap.get('id'))
    this.apiService.getEtrTicket(this.actRoute.snapshot.paramMap.get('id')).subscribe(data => {
      console.log()
      this.editForm.setValue({
        title: data['title'],
        description: data['description'],
        //etr_category: data['etr_category'],
        etr_type: data['etr_type'],
        etr_subtype: data['etr_subtype'],
        reporter: data['reporter'],
        requestor: data['requestor'],
        customer: data['customer'],
        priority: data['priority'],
        status: data['status']
      });
    });
    //this.getEtr(id);
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
     // etr_category: ['', [Validators.required]],
      etr_type: ['', [Validators.required]],
      etr_subtype: ['', [Validators.required]],
      reporter: ['', [Validators.required]],
      requestor: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      priority: ['', [Validators.required]],
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

  getEtr(id) {
    this.apiService.getEtrTicket(id).subscribe(data => {
      this.editForm.setValue({
        title: data['title'],
        description: data['description'],
        etr_category: data['etr_category'],
        etr_type: data['etr_category'],
        etr_subtype: data['etr_category'],
        reporter: data['etr_category'],
        requestor: data['etr_category'],
        customer: data['etr_category'],
        priority: data['etr_category'],
        status: data['status']
      });
    });
  }

  updateEtr() {
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      etr_category: ['', [Validators.required]],
      etr_type: ['', [Validators.required]],
      etr_subtype: ['', [Validators.required]],
      reporter: ['', [Validators.required]],
      requestor: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      priority: ['', [Validators.required]],
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
        this.apiService.updateEtrTicket(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/home');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
