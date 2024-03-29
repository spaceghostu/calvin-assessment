import { ContactsAction, ContactsActionTypes } from './contacts.actions';

export const CONTACTS_FEATURE_KEY = 'contacts';

export interface Entity {
  id: string,
  index: number,
  picture: string,
  firstname: string,
  lastname: string,
  company: string,
  email: string,
  phone: string,
}

export interface ContactsState {
  list: Entity[];
  selectedID?: string;
  selected?: Entity;
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
    case ContactsActionTypes.SelectContact: {
      return {
        ...state,
        selectedID: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}
