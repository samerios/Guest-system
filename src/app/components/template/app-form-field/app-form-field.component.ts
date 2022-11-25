import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
//import { MatFormFieldAppearance } from '@angular/material/form-field';

/**
 * App form field component
 */
@Component({
  selector: 'app-form-field',
  templateUrl: './app-form-field.component.html',
  styleUrls: ['./app-form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppFormFieldComponent implements OnInit {

  /** Label */
  @Input() label!: string;

  /** Form field appearance by default is fill */
  @Input() public appearance: 'legacy' | 'fill' | 'standard' | 'outline' = 'standard';

  /** Form control (optional) */
  @Input() public control!: FormControl;

  /** Content child */
  @ContentChild(MatFormFieldControl, { static: true })
  public formFieldControl!: MatFormFieldControl<any>;

  /** View child for control on form field control */
  @ViewChild('materialFormField', { static: true })
  public matFormField!: MatFormField;

  /** Input title */
  title!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = this.label;
    this.matFormField._control = this.formFieldControl;
  }
}
