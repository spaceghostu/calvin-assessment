import { Action } from '@ngrx/store';
import { Entity } from './contacts.reducer';

export enum ContactsActionTypes {
  LoadContacts = '[Contacts] Load Contacts',
  ContactsLoaded = '[Contacts] Contacts Loaded',
  ContactsLoadError = '[Contacts] Contacts Load Error',
  SelectContact = '[Contacts] Select Contact',
}

export class LoadContacts implements Action {
  readonly type = ContactsActionTypes.LoadContacts;
}

export class ContactsLoadError implements Action {
  readonly type = ContactsActionTypes.ContactsLoadError;
  constructor(public payload: any) {}
}

export class ContactsLoaded implements Action {
  readonly type = ContactsActionTypes.ContactsLoaded;
  constructor(public payload: Entity[]) {}
}

export class SelectContact implements Action {
  readonly type = ContactsActionTypes.SelectContact;
  constructor(public payload: string) {}
}


export type ContactsAction =
  | LoadContacts
  | ContactsLoaded
  | ContactsLoadError
  | SelectContact;

export const fromContactsActions = {
  LoadContacts,
  ContactsLoaded,
  ContactsLoadError,
  SelectContact,
};
