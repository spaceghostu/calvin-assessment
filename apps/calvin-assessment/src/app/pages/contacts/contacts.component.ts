import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactsState, Entity } from '../../contacts/+state/contacts.reducer';
import { Observable } from 'rxjs';
import { LoadContacts } from '../../contacts/+state/contacts.actions';
import { contactsQuery } from '../../contacts/+state/contacts.selectors';

@Component({
  selector: 'calvin-assessment-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Entity[]>;
  loaded$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<ContactsState>) {
    this.contacts$ = this.store.select(contactsQuery.getAllContacts);
    this.loaded$ = this.store.select(contactsQuery.getLoaded);
    this.error$ = this.store.select(contactsQuery.getError);
    this.store.dispatch(new LoadContacts());
  }

  ngOnInit() {
  }

  handleRetry() {
    this.store.dispatch(new LoadContacts());
  }

}
