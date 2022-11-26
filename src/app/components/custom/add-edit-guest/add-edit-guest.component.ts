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

  /** Components stat (Add or Edit) by default is add */
  componentState: string = "Add";

  /** Invite guest title */
  inviteGuestTitle: string = "invite guest";

  /** Guest form group */
  guestForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    if (this.guest) {
      this.componentState = "Edit"
    }

    // Init form group and set validators
    this.guestForm = this.formBuilder.group({
      guestName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
    });
  }

  addOrEditButtonClicked() {
    if (this.guestForm.valid) {
      if (this.componentState == "Add") {
        let guest = {
          name: this.guestForm.value['guestName'],
          phone: this.guestForm.value['phoneNumber'],
          email: this.guestForm.value['emailAddress']
        }
        this.api.post<any>("http://tapi.yabi.cloud/api/create/", guest).subscribe({
          next: (message) => {
            console.log(message)
          },
          error: (message) => {
            console.log(message)
          }
        });
      }
      else {
        console.log(this.guestForm)
       // this.api.put("",)
      }
    }
  }
}
