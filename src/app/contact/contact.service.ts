import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Mikki', 'Hiiri'));
    this.contacts.push(new Contact('Aku', 'Ankka'));
    this.contacts.push(new Contact('Teppo', 'Tulppu'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
