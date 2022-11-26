import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  /** Guest name */
  @Input() name!: string;

  /** Guest phone number */
  @Input() phone!: string;

  /** Guest email address */
  @Input() email!: string;

  /** Phone number title */
  phoneTitle!: string;

  /** Email address title */
  emailTitle!: string;

  constructor() { }

  ngOnInit(): void {

    /** Init phone number and email titles */
    this.phoneTitle = "phone number";
    this.emailTitle = "email address";
  }
}
