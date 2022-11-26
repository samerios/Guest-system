import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Guest } from 'src/app/models/guest';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-add-edit-guest-sidenav',
  templateUrl: './add-edit-guest-sidenav.component.html',
  styleUrls: ['./add-edit-guest-sidenav.component.css']
})
export class AddEditGuestSidenavComponent implements OnInit {

  /** Guest id come from url*/
  guestId: string | null = null;

  /** Guest object for send to  "app-add-edit-guest" component*/
  guest?: Guest = undefined;

  /**
   * Constructor
   * @param route route service for get snapshot param id
   * @param location location service for go back when drawer closed
   * @param api api service for read the guest from server
   */
  constructor(private route: ActivatedRoute,
    private location: Location,
    private api: ApiService) { }

  ngOnInit(): void {

    // Get the guest id if exist url
    this.guestId = this.route.snapshot.paramMap.get("id");

    // If id exist init the guest object data from server
    if (this.guestId) {
      this.guest = { id: 11, name: "samer kinaan", phone: "0549255027", email: "sam.33s@gmail.com" }

      /*this.api.get("http://tapi.yabi.cloud/api/single_read/", this.guestId).subscribe({
        next: (data) => {
          this.guest = data;
        },
        error: (message) => {
          console.log(message)
        }
      });*/
    }
  }

  /**
   * On close drawer event (come from "app-add-edit-guest" component)
   * close drawer and go back
   * @param closed Is closed?
   */
  close(closed: boolean) {
    if (closed) {
      this.location.back();
    }
  }
}
