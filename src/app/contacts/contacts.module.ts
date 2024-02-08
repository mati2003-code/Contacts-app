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



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
