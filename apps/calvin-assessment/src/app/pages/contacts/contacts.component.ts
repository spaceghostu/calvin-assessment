import { Component, OnInit, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactsState, Entity } from '../../contacts/+state/contacts.reducer';
import { Observable } from 'rxjs';
import { LoadContacts } from '../../contacts/+state/contacts.actions';
import { contactsQuery } from '../../contacts/+state/contacts.selectors';
import { pageTransition } from '../animations/pageTransition';

@Component({
  selector: 'calvin-assessment-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [pageTransition],
})
export class ContactsComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';

  contacts$: Observable<Entity[]>;
  loaded$: Observable<boolean>;
  error$: Observable<string>;
  filter: string;

  constructor(private store: Store<ContactsState>) {
    this.contacts$ = this.store.select(contactsQuery.getAllContacts);
    this.loaded$ = this.store.select(contactsQuery.getLoaded);
    this.error$ = this.store.select(contactsQuery.getError);
    this.loaded$.subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new LoadContacts());
      }
    });
  }

  ngOnInit() {
  }

  handleRetry() {
    this.store.dispatch(new LoadContacts());
  }

}
