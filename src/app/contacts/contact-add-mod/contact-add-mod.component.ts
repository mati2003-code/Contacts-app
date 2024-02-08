import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ContactsService } from '../contacts.service';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';

@Component({
  selector: 'app-contact-add-mod',
  templateUrl: './contact-add-mod.component.html',
  styleUrl: './contact-add-mod.component.scss'
})
export class ContactAddModComponent {

  private sub = new Subscription;

  showAdd = false;
  showMod = false;

  addModForm: any;

  contactId!: number;

  constructor(
    public dialogRef: MatDialogRef<ContactsListComponent>,
    @Inject(MAT_DIALOG_DATA) public dataModal: any,
    private fb: FormBuilder,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {

    this.buildReactiveForm();

    if(this.dataModal.idContact) {
      this.showMod = true;
      this.contactId = this.dataModal.idContact;
      this.getContact();
    } else {
      this.showAdd = true;
    }
  }

  buildReactiveForm(): void {

    const namePattern = '^[A-ż]{3,30}$';
    const phonePattern = '^[0-9]{9}$';
    
    this.addModForm = this.fb.group({
      surname: ['', [Validators.required, Validators.pattern(namePattern)]],
      firstname: ['', [Validators.required, Validators.pattern(namePattern)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(phonePattern)]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required]
    });
  }

  addContact(): void {
    const subAddContact = this.contactsService.addContact(this.addModForm.value).subscribe(data => {
      this.dialogRef.close({reload: 1});
    });
    this.sub.add(subAddContact);
  }

  getContact(): void {
    const subGetContact = this.contactsService.getContact(this.contactId).subscribe(data => {
      const [myData] = data;
      
      this.addModForm.patchValue({
        surname: myData.surname,
        firstname: myData.firstname,
        phoneNumber: myData.phoneNumber,
        email: myData.email,
        city: myData.city
      });
    });
    this.sub.add(subGetContact);
  }

  modContact(): void {
    const subModContact = this.contactsService.modContact(this.contactId, this.addModForm.value).subscribe(data => {
      this.dialogRef.close({reload: 1});
    });
    this.sub.add(subModContact);
  }

  closeModal() {
    this.dialogRef.close({reload: 0});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
