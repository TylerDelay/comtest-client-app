import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { Comment } from '../../../model/comment.modal';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {
   ticketId: string;
  @Input() comment: Comment[];
  submitted = false;
  orderForm: FormGroup;
  //ticketData: any[];

  constructor(public fb: FormBuilder, private actRoute: ActivatedRoute, private router: Router, private route: ActivatedRoute, private ngZone: NgZone, private apiService: TicketService ) {}

  ngOnInit() {
    this.ticketId = this.route.snapshot.params.id;
    this.commentForm();
    console.log(this.orderForm);
  }

  commentForm() {
    this.orderForm = this.fb.group({
      user: [''],
      comment: [''],
      createdAt: [''],
      tag: ['']
    })
  }

   // Getter to access form control
   get myForm(){
    return this.orderForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.orderForm.valid) {
      console.log("DIDNT WORK");
      console.log( this.orderForm);
      return false;

    } else {
      let ticketId = this.actRoute.snapshot.paramMap.get('id');
      this.apiService.createComment(ticketId,this.orderForm.value).subscribe({
        next:(res) => {
          this.ngZone.run(() => this.router.navigate(['/home']));
          console.log(this.orderForm);
        }}
      )



    }
  }

}
