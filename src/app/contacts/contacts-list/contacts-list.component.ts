import { Component } from '@angular/core';
import { ContactModel } from '../../models/contact-model';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {

  displayedColumns = ['lp', 'surname', 'firstname','city', 'actions'];

  dataSource: ContactModel[] = [];

  private sub = new Subscription;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    // alert('Widok zostal załadowany');
    this.loadContacts();
  }

  loadContacts(): void {
   const subLoadContacts =  this.contactsService.getContacts().subscribe(data => {
      this.dataSource = data;
    });
    this.sub.add(subLoadContacts);
  }

  delContact(e: Event, idContact: number): void {
    e.stopPropagation();
    const conf = confirm('Czy napewno chcesz usunąć daną pozycję?');
    if(conf) {
     const subDelContact = this.contactsService.removeContact(idContact).subscribe(data => {
      if(data.status === 'ok') this.loadContacts();
    });
    this.sub.add(subDelContact);
   }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
