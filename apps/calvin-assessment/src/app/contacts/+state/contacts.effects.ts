import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { ContactsPartialState } from './contacts.reducer';
import {
  LoadContacts,
  ContactsLoaded,
  ContactsLoadError,
  ContactsActionTypes
} from './contacts.actions';

@Injectable()
export class ContactsEffects {
  @Effect() loadContacts$ = this.dataPersistence.fetch(
    ContactsActionTypes.LoadContacts,
    {
      run: (action: LoadContacts, state: ContactsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ContactsLoaded([]);
      },

      onError: (action: LoadContacts, error) => {
        console.error('Error', error);
        return new ContactsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ContactsPartialState>
  ) {}
}
