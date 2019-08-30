import { Entity, ContactsState } from './contacts.reducer';
import { contactsQuery } from './contacts.selectors';

describe('Contacts Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getContactsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createContacts = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      contacts: {
        list: [
          createContacts('PRODUCT-AAA'),
          createContacts('PRODUCT-BBB'),
          createContacts('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Contacts Selectors', () => {
    it('getAllContacts() should return the list of Contacts', () => {
      const results = contactsQuery.getAllContacts(storeState);
      const selId = getContactsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedContacts() should return the selected Entity', () => {
      const result = contactsQuery.getSelectedContacts(storeState);
      const selId = getContactsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = contactsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = contactsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
