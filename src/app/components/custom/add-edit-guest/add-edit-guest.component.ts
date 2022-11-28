import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonType } from 'src/app/enums/button-type';
import { Guest } from 'src/app/models/guest';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-add-edit-guest',
  templateUrl: './add-edit-guest.component.html',
  styleUrls: ['./add-edit-guest.component.css']
})

/** Add or edit guest component when the guest input has data
 *  then the component state is edit, when click on update/invite valid 
 * and update/ edit data
 * check if data  */
export class AddEditGuestComponent implements OnInit {

  /** Guest if guest has data that means the component in add state */
  @Input() guest?: Guest;

  /* Close sidenav output event, for emit clicked button and success (optional) */
  @Output() closeSidenav: EventEmitter<{ button: ButtonType, success?: boolean }> = new EventEmitter<{ button: ButtonType, success?: boolean }>();

  /** Components stat (Add or Edit) by default is add */
  componentState: string = "Add";

  /** Invite guest title */
  inviteGuestTitle: string = "invite guest";

  /** Guest form group */
  guestForm!: FormGroup;

  /**
   * Constructor
   * @param formBuilder Form builder init guestForm controls
   * @param api Api service for use POST/PUT methods
   */
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    console.log(this.guest)
    // Init form group and set validators
    this.guestForm = this.formBuilder.group({
      guestName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern("[0-9]{3}-[0-9]{7}"),
      Validators.minLength(11), Validators.maxLength(11)]],
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
   * Cancel button clicked method
   */
  cancelButtonClicked() {
    this.closeSidenav.emit({ button: ButtonType.Cancel })
  }

  /**
   * add or edit button clicked method check if data valid
   * and update/add data by component state
   */
  async addOrEditButtonClicked() {
    if (this.guestForm.valid) {
      if (this.componentState == "Add") {
        await this.addGuest();
      }
      else {
        await this.updateGuest();
      }
    }
  }

  /**
   * Add guest method
   */
  async addGuest() {
    let guestAdd = {
      name: this.guestForm.value['guestName'],
      phone: this.guestForm.value['phoneNumber'],
      email: this.guestForm.value['emailAddress']
    }
    await this.api.post("http://tapi.yabi.cloud/api/create/", guestAdd).subscribe({
      next: () => {
        this.closeSidenav.emit({ button: ButtonType.Ok, success: true });
      },
      error: () => {
        this.closeSidenav.emit({ button: ButtonType.Ok, success: false });
      }
    });
  }

  /**
   * Update method ,before update data check if data has changed
   */
  async updateGuest() {
    if (this.guest!.name !== this.guestForm.value['guestName'] ||
      this.guest!.email !== this.guestForm.value['emailAddress'] ||
      this.guest!.phone !== this.guestForm.value['phoneNumber']) {

      let guest: Guest = {
        id: this.guest!.id,
        name: this.guestForm.value['guestName'],
        phone: this.guestForm.value['phoneNumber'],
        email: this.guestForm.value['emailAddress']
      }

      await this.api.post("http://tapi.yabi.cloud/api/update/", guest).subscribe({
        next: () => {
          this.closeSidenav.emit({ button: ButtonType.Ok, success: true });
        },
        error: () => {
          this.closeSidenav.emit({ button: ButtonType.Ok, success: false });
        }
      });
    }
  }

}