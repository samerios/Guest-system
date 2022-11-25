import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditGuestComponent } from './components/custom/add-edit-guest/add-edit-guest.component';
import { AppFormFieldComponent } from './components/template/app-form-field/app-form-field.component';
import { GuestDetailsComponent } from './components/custom/guest-details/guest-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditGuestComponent,
    AppFormFieldComponent,
    GuestDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
