import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ButtonType } from './enums/button-type';
import { DialogType } from './enums/dialog-type';
import { Guest } from './models/guest';
import { ApiService } from './shared/api.service';
import { UiService } from './shared/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /** View child for control on addEditGuestSidenav */
  @ViewChild('addEditGuestSidenav')
  public addEditGuestSidenav!: MatSidenav;

  /** Guest object for send to "app-add-edit-guest" component 
   * for update whe click on edit guest button*/
  guest?: Guest;

  /** App header title */
  appHeaderTitle: string = "dashboard";

  /** Invite guest title */
  inviteGuestTitle: string = "guest list";

  /** Invite guest button title */
  inviteGuestButtonTitle: string = "invite a guest";

  /** No data title */
  noDataTitle: string = "no guests were invited";

  /** No data sub title */
  noDataSubTitle: string = "please invite new guests to start working";

  /**  Guests array */
  guests!: Guest[];

  /**
   * Constructor
   * @param api Api service for use getAll/get/post/put/delete methods
   * @param ui Ui service for open dialogs messages
   */
  constructor(private api: ApiService, private ui: UiService) {
  }

  ngOnInit(): void {

    /** Get guests and init guests array */
    this.api.getAll("http://tapi.yabi.cloud/api/read/").subscribe(
      {
        next: (data) => {
          this.guests = data.body;
        },
        error: () => {
          this.ui.openDialog(DialogType.Alert, "Error", "Error while fetching records");
        }
      }
    );
  }

  /**
   * Open openAddEditGuestSidenav sidenav and sent the guest object for edit 
   * @param guest Guest object (optional) use when click edit guest button
   */
  openAddEditGuestSidenav(guest?: Guest) {

    if (guest) {
      this.guest = guest;
    }

    this.addEditGuestSidenav.toggle();
  }

  /**
 * On close sidenav event (come from "app-add-edit-guest" component)
 * Close sidenav and update guest to undefined
 * @param closed Is closed?
 */
  close(closed: boolean) {
    this.addEditGuestSidenav.close();
    this.guest = undefined;
  }

  /**
   * Guest details delete button clicked
   * @param id 
   */
  deleteButtonClicked(id: number) {
    this.ui.openDialog(DialogType.Prompt, "Warning", "Are you sure to delete guest id : " + id + " ?").subscribe((result: ButtonType) => {
      let buttonType: unknown = ButtonType[result];

      // Delete guest if clicked on yes button
      if (buttonType == ButtonType.Ok) {
        this.api.delete("http://tapi.yabi.cloud/api/delete/", id).subscribe({
          next: (ff) => {
            //this.initUsersTable();
            console.log(ff)
          },
          error: () => {
            this.ui.openDialog(DialogType.Alert, "Error", "Error while fetching records");
          }
        });
      }
    });
  }
}
