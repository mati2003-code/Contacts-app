import { Component } from '@angular/core';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {
  displayedColumns = ['lp', 'surname', 'firstname','city', 'actions'];
  dataSource: ContactModel[] = [
    {id: 1,  surname: 'Kowalska', firstname: 'Anna', phoneNumber: '574661713', email: 'anna@example.com', city: 'Kraków'},
    {id: 2, surname: 'Nowak', firstname: 'Karol', phoneNumber: '874666789', email: 'karol@example.com', city: 'Gdańsk'},
    {id: 3, surname: 'Marcinek', firstname: 'Mateusz', phoneNumber: '974661555', email: 'mateusz@example.com', city: 'Tarnów'},
    {id: 4, surname: 'Spinda', firstname: 'Piotr', phoneNumber: '774661222', email: 'piotr@example.com', city: 'Warszawa'}
  ]
}
