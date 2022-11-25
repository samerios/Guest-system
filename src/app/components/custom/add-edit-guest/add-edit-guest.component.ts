import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-guest',
  templateUrl: './add-edit-guest.component.html',
  styleUrls: ['./add-edit-guest.component.css']
})
export class AddEditGuestComponent implements OnInit {

  inviteGuestTitle: string = "invite guest";

  /** Guest form group */
  guestForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // Init form group and set validators
    this.guestForm = this.formBuilder.group({
      guestName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
}
