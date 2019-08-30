import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { ContactsPartialState, Entity } from './contacts.reducer';
import {
  LoadContacts,
  ContactsLoaded,
  ContactsLoadError,
  ContactsActionTypes
} from './contacts.actions';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ContactsEffects {
  @Effect() loadContacts$ = this.dataPersistence.fetch(
    ContactsActionTypes.LoadContacts,
    {
      run: (action: LoadContacts, state: ContactsPartialState) => {
        return this.afs.collection<Entity>('contacts').valueChanges().pipe(
          map((action: any) => {
            return new ContactsLoaded(action)
          })
        )
      },

      onError: (action: LoadContacts, error) => {
        console.error('Error', error);
        return new ContactsLoadError(error);
      }
    }
  );

  constructor(
    private dataPersistence: DataPersistence<ContactsPartialState>,
    private afs: AngularFirestore,
  ) {}
}
