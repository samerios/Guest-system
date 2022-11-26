import { Component, OnInit } from '@angular/core';
import { Guest } from './models/guest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.guests = [
      { id: 1, name: "dsds", phone: "5252114222", email: "vv@dsdsd.com" },
      { id: 2, name: "ttt", phone: "5252114222", email: "asas@dsdsd.com" },
      { id: 3, name: "dffdsds", phone: "55822", email: "tt@dsdsd.com" },
      { id: 4, name: "fdf", phone: "34343", email: "hh@ff.com" },
      { id: 5, name: "dsse432xc", phone: "3434", email: "asas@dsdsd.com" },
      { id: 6, name: "qwww", phone: "5252114222", email: "asas@dsdsd.com" },
      { id: 7, name: "xxxx", phone: "5252114222", email: "asas@dsdsd.com" },
      { id: 8, name: "nnnn", phone: "5252114222", email: "asas@dsdsd.com" },
      { id: 9, name: "mmmm", phone: "5252114222", email: "rrr@dsdsd.com" },
      { id: 10, name: "rrrr", phone: "5252114222", email: "asas@dsdsd.com" },
    ]
  }

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

  guests!: Guest[];

}
