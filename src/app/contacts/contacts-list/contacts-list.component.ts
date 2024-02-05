import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {
  data = [
    {id: 1, firstname: 'Anna', lastname: 'Kowalska', phoneNumber: '574661713'},
    {id: 2, firstname: 'Karol', lastname: 'Nowak', phoneNumber: '874666789'},
    {id: 3, firstname: 'Mateusz', lastname: 'Marcinek', phoneNumber: '974661555'},
    {id: 4, firstname: 'Piotr', lastname: 'Spinda', phoneNumber: '774661222'}
  ]
}
