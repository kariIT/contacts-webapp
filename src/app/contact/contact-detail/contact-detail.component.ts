import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarAction} from '../../ui/toolbar/toolbar-action';

// import {error} from 'util';

@Component({
  selector: 'cw-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;
  editingEnabled: boolean;
  contactId: any;

  constructor(private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarService) {
    this.contact = new Contact();
    this.editingEnabled = true;
  }

  ngOnInit() {
    this.toolbar.toolbarOptions.next(
      new ToolbarOptions(false, 'Contact', [new ToolbarAction(this.onEdit.bind(this), 'edit')]));

    this.contactId = this.route.snapshot.paramMap.get('id');
    let toolbarActions: ToolbarAction[];

    if (this.contactId == null) {
      // Create contact
      toolbarActions = [];
    } else {
      // View/Edit contact
      this.editingEnabled = false;
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];

      this.contactService.getContactById(this.contactId).subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      }, error => {
        console.error('Getting contact failed.');
        console.error(error);
        this.router.navigate(['/contacts']);
      });
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Contact', toolbarActions));
  }

  // CRUD Operations
  onSave(): void {
    if (this.contactId == null) {
      // Create contact
      this.editingEnabled = false;
      this.contactService.createContact(this.contact).subscribe(response => {
        console.log(response);
        this.router.navigate(['/contacts']);
      });
    } else {
      // Edit contact
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe(response => {
        this.contact = response;
      });
    }
  }

  onEdit(): void {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;

    // Happens when clicking edit button
    if (this.editingEnabled === true) {
      // Edit mode on, toggles between:
      toolbarActions = [
      new ToolbarAction(this.onDelete.bind(this), 'delete'),
      new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];
    } else {
      // Edit mode off
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
    }
    // Toolbar
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Contact', toolbarActions));
  }

  onDelete(): void {
    this.editingEnabled = false;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
