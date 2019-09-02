import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CONTACTS_FEATURE_KEY, ContactsState } from './contacts.reducer';

// Lookup the 'Contacts' feature state managed by NgRx
const geAllState = createFeatureSelector<ContactsState>(
  CONTACTS_FEATURE_KEY
);

const getLoaded = createSelector(
  geAllState,
  (state: ContactsState) => state.loaded
);
const getError = createSelector(
  geAllState,
  (state: ContactsState) => state.error
);

const getAllContacts = createSelector(
  geAllState,
  getLoaded,
  (state: ContactsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  geAllState,
  (state: ContactsState) => state.selectedID
);
const getSelectedContacts = createSelector(
  getAllContacts,
  getSelectedId,
  (contacts, id) => {
    const result = contacts.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const contactsQuery = {
  getLoaded,
  getError,
  getAllContacts,
  getSelectedContacts
};
