import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** App header title */
  appHeaderTitle: string = "dashboard";

  /** Invite guest title */
  inviteGuestTitle: string = "guest list";

  /** Invite guest button title */
  inviteGuestButtonTitle: string = "invite a guest";

  /** No data title  */
  noDataTitle: string = "no guests were invited";

  noDataSubTitle: string = "please invite new guests to start working";

  show = true;
}
