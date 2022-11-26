import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEditGuestSidenavComponent } from './components/custom/add-edit-guest-sidenav/add-edit-guest-sidenav.component';

const routes: Routes = [
  {
    component: AddEditGuestSidenavComponent, path: 'guest'
  },
  {
    component: AddEditGuestSidenavComponent, path: 'guest/:id',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }