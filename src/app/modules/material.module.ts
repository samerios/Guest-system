import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    exports: [
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule
    ]
})

export class MaterialModule { }