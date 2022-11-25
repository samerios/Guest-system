import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    exports: [
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})

export class MaterialModule { }