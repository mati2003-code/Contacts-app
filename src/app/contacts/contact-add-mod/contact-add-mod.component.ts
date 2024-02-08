import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-add-mod',
  templateUrl: './contact-add-mod.component.html',
  styleUrl: './contact-add-mod.component.scss'
})
export class ContactAddModComponent {

  showAdd = false;
  showMod = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataModal: any,
  ) {}

  ngOnInit() {
    console.log(this.dataModal);
    if(this.dataModal.idContact) {
      this.showMod = true;
    } else {
      this.showAdd = true;
    }
  }
}
