import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { RouterModule } from '@angular/router';
import { ContactAddModComponent } from './contact-add-mod/contact-add-mod.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactViewComponent,
    ContactAddModComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
