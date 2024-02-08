import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactViewComponent } from './contacts/contact-view/contact-view.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contacts-list'},
  {path: 'contacts-list', component: ContactsListComponent},
  {path: 'contact-view/:id', component: ContactViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
