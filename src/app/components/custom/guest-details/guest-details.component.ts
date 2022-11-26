import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Guest } from 'src/app/models/guest';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  /** Guest object */
  @Input() guest!: Guest;

  /**  Event emitter (deleteButtonClicked) */
  @Output() deleteButtonClicked: EventEmitter<number> = new EventEmitter<number>();

  /** Event emitter editButtonClicked */
  @Output() editButtonClicked: EventEmitter<Guest> = new EventEmitter<Guest>();

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
