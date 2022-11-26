import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditGuestComponent } from './components/custom/add-edit-guest/add-edit-guest.component';
import { AppFormFieldComponent } from './components/template/app-form-field/app-form-field.component';
import { GuestDetailsComponent } from './components/custom/guest-details/guest-details.component';
import { ChangeBorderColorWhenHoverDirective } from './directives/change-border-color-when-hover.directive';
import { DialogComponent } from './components/template/dialog/dialog.component';
import { AddEditGuestSidenavComponent } from './components/custom/add-edit-guest-sidenav/add-edit-guest-sidenav.component';
import { MainSidenavComponent } from './components/template/main-sidenav/main-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditGuestComponent,
    AppFormFieldComponent,
    GuestDetailsComponent,
    ChangeBorderColorWhenHoverDirective,
    DialogComponent,
    AddEditGuestSidenavComponent,
    MainSidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
