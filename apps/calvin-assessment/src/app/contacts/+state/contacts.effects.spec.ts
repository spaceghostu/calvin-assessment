import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ContactsEffects } from './contacts.effects';
import { LoadContacts, ContactsLoaded } from './contacts.actions';

describe('ContactsEffects', () => {
  let actions: Observable<any>;
  let effects: ContactsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ContactsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ContactsEffects);
  });

  describe('loadContacts$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadContacts() });
      expect(effects.loadContacts$).toBeObservable(
        hot('-a-|', { a: new ContactsLoaded([]) })
      );
    });
  });
});
