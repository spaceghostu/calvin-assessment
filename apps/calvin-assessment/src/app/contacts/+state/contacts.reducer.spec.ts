import { ContactsLoaded } from './contacts.actions';
import {
  ContactsState,
  initialState,
  reducer
} from './contacts.reducer';
import { generateContact } from './contacts.utils';

describe('Contacts Reducer', () => {

  describe('valid Contacts actions ', () => {
    it('should return set the list of known Contacts', () => {
      const contacts = [
        generateContact(),
        generateContact(),
      ];
      const action = new ContactsLoaded(contacts);
      const result: ContactsState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(result.list).toBe(contacts);
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
