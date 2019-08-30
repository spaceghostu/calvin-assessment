import { contactsQuery } from './contacts.selectors';
import { generateContact } from './contacts.utils';

describe('Contacts Selectors', () => {
  const ERROR_MSG = 'No Error Available';

  let storeState;

  beforeEach(() => {
    storeState = {
      contacts: {
        list: [
          generateContact(),
          generateContact(),
          generateContact(),
        ],
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Contacts Selectors', () => {
    it('getAllContacts() should return the list of Contacts', () => {
      const results = contactsQuery.getAllContacts(storeState);

      expect(results.length).toBe(3);
    });

    // it('getSelectedContacts() should return the selected Entity', () => {
    //   const result = contactsQuery.getSelectedContacts(storeState);

    //   expect(selId).toBe('PRODUCT-BBB');
    // });

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
