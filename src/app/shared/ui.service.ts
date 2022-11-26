import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from '../components/template/dialog/dialog.component';
import { ButtonType } from '../enums/button-type';
import { DialogType } from '../enums/dialog-type';

@Injectable({
  providedIn: 'root'
})

/**
 * Ui service contains methods like open dialog
 */
export class UiService {

  /**
   * Constructor
   * @param dialog Mat dialog
   */
  constructor(private dialog: MatDialog) { }

  /**
   * Open dialog by send dialog type title and content 
   * @param dialogType Dialog type (Alert, Prompt...)
   * @param title Dialog title
   * @param content Dialog content 
   * @param width Width (optional)
   * @returns Observable that is notified when the dialog is finished closing.
   */
  openDialog(dialogType: DialogType,
    title: string,
    content: string,
    width?: string): Observable<ButtonType> {
    let dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, {
      width: width
    });
    dialogRef.disableClose = true;//disable default close operation
    dialogRef.componentInstance.type = dialogType;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.content = content;
    return dialogRef.afterClosed();
  }
}
