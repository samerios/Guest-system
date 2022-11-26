import { Component, OnInit } from '@angular/core';
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

  /** Is no data for sho no data message or show data if false */
  noData = false;

  /* Guests array */
  guests!: Guest[];

  /**
   * Constructor
   * @param api Api service for use getAll/get/post/put/delete methods
   * @param ui Ui service for open dialogs messages
   */
  constructor(private api: ApiService, private ui: UiService) { }

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
}
