import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { ContactsEffects } from './contacts.effects';
import { LoadContacts, ContactsLoaded } from './contacts.actions';
import { ContactsService } from '../contacts.service';
import { generateContacts } from './contacts.utils';

describe('ContactsEffects', () => {
  let actions: Observable<any>;
  let effects: ContactsEffects;
  let contactsService: ContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        ContactsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        {
          provide: ContactsService,
          useValue: {
            geAll: jest.fn(),
          }
        }
      ]
    });

    effects = TestBed.get(ContactsEffects);
    contactsService = TestBed.get(ContactsService);
  });

  describe('loadContacts$', () => {
    it('should get contacts', () => {
      const contacts = generateContacts();
      const action = new LoadContacts();
      const outcome = new ContactsLoaded(contacts);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: contacts });
      const expected = cold('--b', { b: outcome });
      contactsService.geAll = jest.fn(() => response);

      expect(effects.loadContacts$).toBeObservable(expected);
    });
  });
});
