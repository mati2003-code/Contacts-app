import { Component } from '@angular/core';
import { ContactModel } from '../../models/contact-model';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactAddModComponent } from '../contact-add-mod/contact-add-mod.component';
import { CdkDialogContainer } from '@angular/cdk/dialog';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {

  displayedColumns = ['lp', 'surname', 'firstname','city', 'actions'];

  dataSource: ContactModel[] = [];

  private sub = new Subscription;

  constructor(
    private contactsService: ContactsService,
    public dialog: MatDialog
    ) {}

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

  openAddModComponent(e: Event, idContact?: number) {
    e.stopPropagation();

    const dialogConfig = new MatDialogConfig;

    dialogConfig.width = '90%';
    dialogConfig.height = '90%';

    // dialogConfig.disableClose = true;

    dialogConfig.data = {
      idContact
    }

    const dialogRef = this.dialog.open(ContactAddModComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
