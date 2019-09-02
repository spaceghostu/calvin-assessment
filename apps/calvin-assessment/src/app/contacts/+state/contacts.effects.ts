import { Injectable } from '@angular/core';
import { Effect, createEffect } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';

import {
  ContactsLoaded,
  ContactsLoadError,
  ContactsActionTypes,
} from './contacts.actions';
import { ContactsService } from '../contacts.service';
import { Actions } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { of } from 'rxjs';

@Injectable()
export class ContactsEffects {
  @Effect() loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActionTypes.LoadContacts),
      mergeMap(action =>
        this.contactsService.geAll().pipe(
          map(res =>
            res.map(item => ({
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            }))
          ),
          map(data => new ContactsLoaded(data)),
          catchError(error => of(new ContactsLoadError(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) {}
}
