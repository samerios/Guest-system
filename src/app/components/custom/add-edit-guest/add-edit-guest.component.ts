import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guest } from 'src/app/models/guest';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-add-edit-guest',
  templateUrl: './add-edit-guest.component.html',
  styleUrls: ['./add-edit-guest.component.css']
})
export class AddEditGuestComponent implements OnInit {

  /** Guest if guest has data that means the component in add state */
  @Input() guest?: Guest;

  /* Close drawer output event */
  @Output() closeDrawer: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** Components stat (Add or Edit) by default is add */
  componentState: string = "Add";

  /** Invite guest title */
  inviteGuestTitle: string = "invite guest";

  /** Guest form group */
  guestForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    // Init form group and set validators
    this.guestForm = this.formBuilder.group({
      guestName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
    });

    // If guest object has data changes component state to Edit 
    // and init guest form control values
    if (this.guest) {
      this.componentState = "Edit";
      this.guestForm.controls['guestName'].setValue(this.guest.name);
      this.guestForm.controls['emailAddress'].setValue(this.guest.email);
      this.guestForm.controls['phoneNumber'].setValue(this.guest.phone);
    }
  }

  /**
   * add or edit button clicked method check if data valid
   * and update/add data by component state
   */
  addOrEditButtonClicked() {
    if (this.guestForm.valid) {
      if (this.componentState == "Add") {
        this.addGuest();
      }
      else {
        this.updateGuest();
      }
    }
  }

  /**
   * Add guest method
   */
  addGuest() {
    let guestAdd = {
      name: this.guestForm.value['guestName'],
      phone: this.guestForm.value['phoneNumber'],
      email: this.guestForm.value['emailAddress']
    }
    this.api.post<any>("http://tapi.yabi.cloud/api/create/", guestAdd).subscribe({
      next: (message) => {
        console.log(message)
      },
      error: (message) => {
        console.log(message)
      }
    });
  }

  /**
   * Update method before check if data has changed
   */
  updateGuest() {
    if (this.guest!.name !== this.guestForm.value['guestName'] ||
      this.guest!.email !== this.guestForm.value['emailAddress'] ||
      this.guest!.phone !== this.guestForm.value['phoneNumber']) {
      this.guest!.name = this.guestForm.value['guestName'];
      this.guest!.email = this.guestForm.value['emailAddress'];
      this.guest!.phone = this.guestForm.value['phoneNumber'];

      this.api.put("http://tapi.yabi.cloud/api/update/", this.guest).subscribe({
        next: (message) => {
          console.log(message)
        },
        error: (message) => {
          console.log(message)
        }
      });
    }
  }
}
