import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'cw-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts.push(new Contact('Mikki', 'Hiiri'));
    this.contacts.push(new Contact('Aku', 'Ankka'));
    this.contacts.push(new Contact('Teppo', 'Tulppu'));
    console.log(this.contacts);
  }

}
