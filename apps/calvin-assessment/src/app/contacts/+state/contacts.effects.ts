import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { ContactsPartialState } from './contacts.reducer'
import {
  LoadContacts,
  ContactsLoaded,
  ContactsLoadError,
  ContactsActionTypes
} from './contacts.actions';
import { ContactsService } from '../contacts.service';

@Injectable()
export class ContactsEffects {
  @Effect() loadContacts$ = this.dataPersistence.fetch(
    ContactsActionTypes.LoadContacts,
    {
      run: (action: LoadContacts, state: ContactsPartialState) => {
        return this.contactsService.getContacts().pipe(
          map(res =>
            res.map(item => ({
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            }))
          ),
          map(data => new ContactsLoaded(data))
        );
      },

      onError: (action: LoadContacts, error) => {
        return new ContactsLoadError(error);
      }
    }
  );

  constructor(
    private dataPersistence: DataPersistence<ContactsPartialState>,
    private contactsService: ContactsService
  ) {}
}
