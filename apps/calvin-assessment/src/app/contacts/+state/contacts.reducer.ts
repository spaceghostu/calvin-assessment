import { ContactsAction, ContactsActionTypes } from './contacts.actions';

export const CONTACTS_FEATURE_KEY = 'contacts';

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
  list: Entity[];
  selectedId?: string | number;
  loaded: boolean;
  error?: any;
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
    case ContactsActionTypes.LoadContacts: {
      return {
        ...state,
        list: [],
        loaded: false,
        error: null,
      }
    }
    case ContactsActionTypes.ContactsLoaded: {
      return {
        ...state,
        list: action.payload,
        loaded: true
      };
    }
    case ContactsActionTypes.ContactsLoadError: {
      return {
        ...state,
        loaded: false,
        error: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}
