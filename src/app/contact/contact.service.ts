import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Mikki', 'Hiiri'));
    this.contacts.push(new Contact(2, 'Aku', 'Ankka'));
    this.contacts.push(new Contact(3, 'Teppo', 'Tulppu'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
