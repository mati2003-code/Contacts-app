import { Component } from '@angular/core';
import { ContactModel } from '../../models/contact-model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {

  displayedColumns = ['lp', 'surname', 'firstname','city', 'actions'];

  dataSource: ContactModel[] = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactsService.getContacts().subscribe(data => {
      this.dataSource = data;
    });
  }

  delContact(idContact: number): void {
    const conf = confirm('Czy napewno chcesz usunąć daną pozycję?');
    if(conf) this.contactsService.removeContact(idContact).subscribe(data => {
      // console.log(data);
      if(data.status === 'ok') this.loadContacts();
    });
  }
}
