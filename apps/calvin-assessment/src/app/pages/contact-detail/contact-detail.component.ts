import { Component, OnInit, Sanitizer, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ContactsState, Entity } from '../../contacts/+state/contacts.reducer';
import {
  SelectContact,
  LoadContacts
} from '../../contacts/+state/contacts.actions';
import { contactsQuery } from '../../contacts/+state/contacts.selectors';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ContactsService } from '../../contacts/contacts.service';
import { MdcSnackbar } from '@angular-mdc/web';

@Component({
  selector: 'calvin-assessment-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact$: Observable<Entity>;
  loaded$: Observable<Boolean>;
  editMode = false;

  contactSnapshot: Entity;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ContactsState>,
    private sanitizer: Sanitizer,
    private contactsService: ContactsService,
    private snackbar: MdcSnackbar,
    private router: Router
  ) {
    this.store.dispatch(new SelectContact(this.route.snapshot.params['id']));
    this.contact$ = this.store.select(contactsQuery.getSelectedContacts);
    this.loaded$ = this.store.select(contactsQuery.getLoaded);
    this.loaded$.subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new LoadContacts());
      }
    });
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

  handleEdit() {
    this.contact$.pipe(take(1)).forEach(contact => {
      this.contactSnapshot = { ...contact };
    });
    this.editMode = true;
  }

  handleSave() {
    this.contactsService.update(this.contactSnapshot).then(() => {
      this.snackbar.open('Contact Saved');
    });
    this.editMode = false;
  }
  handleCancel() {
    this.contact$.pipe(take(1)).forEach(contact => {
      this.contactSnapshot = { ...contact };
    });
    this.editMode = false;
  }
  handleDelete() {
    if (!this.contactSnapshot) {
      this.contact$.pipe(take(1)).forEach(contact => {
        this.contactSnapshot = { ...contact };
      });
    }
    const snackbarRef = this.snackbar.open('Contact Deleted', 'Undo', {
      timeoutMs: 10000,
      dismiss: true
    });
    snackbarRef.afterDismiss().subscribe(reason => {
      if (reason === 'dismiss') {
        this.contactsService.delete(this.contactSnapshot);
        this.router.navigate(['/contacts']);
      }
    });
  }
}
