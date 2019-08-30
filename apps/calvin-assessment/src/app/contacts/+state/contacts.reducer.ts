import { ContactsAction, ContactsActionTypes } from './contacts.actions';

export const CONTACTS_FEATURE_KEY = 'contacts';

/**
 * Interface for the 'Contacts' data used in
 *  - ContactsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface Entity {
  index: number,
  picture: string,
  name: {
    first: string,
    last: string,
  },
  company: string,
  email: string,
  phone: string,
}

export interface ContactsState {
  list: Entity[]; // list of Contacts; analogous to a sql normalized table
  selectedId?: string | number; // which Contacts record has been selected
  loaded: boolean; // has the Contacts list been loaded
  error?: any; // last none error (if any)
}

export interface ContactsPartialState {
  readonly [CONTACTS_FEATURE_KEY]: ContactsState;
}

export const initialState: ContactsState = {
  list: [],
  loaded: false
};

export function reducer(
  state: ContactsState = initialState,
  action: ContactsAction
): ContactsState {
  switch (action.type) {
    case ContactsActionTypes.ContactsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
