import { Component, OnInit, Sanitizer, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ContactsState, Entity } from '../../contacts/+state/contacts.reducer';
import {
  SelectContact,
  LoadContacts
} from '../../contacts/+state/contacts.actions';
import { contactsQuery } from '../../contacts/+state/contacts.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'calvin-assessment-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact$: Observable<Entity>;
  loaded$: Observable<Boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ContactsState>,
    private sanitizer: Sanitizer
  ) {
    this.store.dispatch(new SelectContact(this.route.snapshot.params['id']));
    this.contact$ = this.store.select(contactsQuery.getSelectedContacts);
    this.loaded$ = this.store.select(contactsQuery.getLoaded);
    this.loaded$.subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new LoadContacts());
      }
    })
  }

  ngOnInit() {}

  sanitizedPicture() {
    let style;
    this.contact$.subscribe(contact => {
      style = this.sanitizer.sanitize(
        SecurityContext.STYLE,
        `url(${this.sanitizer.sanitize(SecurityContext.URL, contact.picture)})`
      );
    });
    return style;
  }
}
