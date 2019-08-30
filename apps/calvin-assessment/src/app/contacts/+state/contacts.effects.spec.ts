import { TestBed, async } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { ContactsEffects } from './contacts.effects';
import { LoadContacts, ContactsLoaded } from './contacts.actions';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ContactsService } from '../contacts.service';
import { Entity } from './contacts.reducer';
import * as faker from 'faker/locale/en_US';

export const generateContact = (): Entity => {
  return {
    index: faker.random.number(),
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    picture: faker.image.imageUrl(),
    company: faker.company.companyName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
  };
};

export const generateContacts = (
  count = faker.random.number({ min: 1, max: 20 })
): Entity[] => {
  return Array.apply(null, Array(count)).map(() => generateContact());
};

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
        provideMockActions(() => actions),
        {
          provide: ContactsService,
          useValue: {
            getContacts: jest.fn(),
          }
        }
      ],
      providers: [
        ContactsEffects,
        DataPersistence,
        provideMockActions(() => actions)
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
      contactsService.getContacts = jest.fn(() => response);

      expect(effects.loadContacts$).toBeObservable(expected);
    });
  });
});
