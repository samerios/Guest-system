import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonType } from 'src/app/enums/button-type';
import { DialogType } from 'src/app/enums/dialog-type';

/** Dialog component for open dialog by type, title and content */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  /** Dialog type */
  type!: DialogType;

  /** Title */
  title!: string;

  /** Content */
  content!: string;

  /** Buttons array of objects */
  buttons: Array<{ type: ButtonType, name: string, color: string }> = [];

  /**
   *  Constructor
   * @param dialogRef Dialog reference for control on dialog
   */
  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    // Init dialog names list for show them in html
    switch (this.type) {
      case DialogType.Alert:
        this.buttons.push({ type: ButtonType.Ok, name: "Ok", color: "primary" });
        break;
      case DialogType.Prompt:
        this.buttons.push({ type: ButtonType.Ok, name: "Ok", color: "primary" });
        this.buttons.push({ type: ButtonType.Cancel, name: "Cancel", color: "accent" });
        break;
      case DialogType.YesNoPrompt:
        this.buttons.push({ type: ButtonType.Yes, name: "Yes", color: "primary" });
        this.buttons.push({ type: ButtonType.No, name: "No", color: "primary" });
        break;
      case DialogType.YesNoCancelPrompt:
        this.buttons.push({ type: ButtonType.Yes, name: "Yes", color: "primary" });
        this.buttons.push({ type: ButtonType.No, name: "No", color: "primary" });
        this.buttons.push({ type: ButtonType.Cancel, name: "Cancel", color: "accent" });
        break;
      default:
        break;
    }
  }

  /**
   * When click button close dialog with click button result
   * @param buttonType Button type (Ok, Yes, No ...)
   */
  public clickButton(buttonType: ButtonType) {
    this.dialogRef.close(ButtonType[buttonType]);
  }
}