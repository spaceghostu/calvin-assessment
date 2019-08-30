import { ContactsLoaded } from './contacts.actions';
import {
  ContactsState,
  Entity,
  initialState,
  reducer
} from './contacts.reducer';

describe('Contacts Reducer', () => {
  const getContactsId = it => it['id'];
  let createContacts;

  beforeEach(() => {
    createContacts = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Contacts actions ', () => {
    it('should return set the list of known Contacts', () => {
      const contactss = [
        createContacts('PRODUCT-AAA'),
        createContacts('PRODUCT-zzz')
      ];
      const action = new ContactsLoaded(contactss);
      const result: ContactsState = reducer(initialState, action);
      const selId: string = getContactsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
