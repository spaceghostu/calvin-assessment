import { Component, OnInit, HostBinding } from '@angular/core';
import { ContactsService } from '../../contacts/contacts.service';
import { Router } from '@angular/router';
import { pageTransition } from '../animations/pageTransition';

@Component({
  selector: 'calvin-assessment-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
  animations: [pageTransition],
})
export class AddContactComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';

  contactSnapshot = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    company: '',
    picture: 'assets/default-user.png',
  }

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  handleAdd() {
    this.contactsService.add(this.contactSnapshot).then(user => {
      this.router.navigate(['/contact', user.id])
    });
  }

}
