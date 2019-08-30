import { Action } from '@ngrx/store';
import { Entity } from './contacts.reducer';

export enum ContactsActionTypes {
  LoadContacts = '[Contacts] Load Contacts',
  ContactsLoaded = '[Contacts] Contacts Loaded',
  ContactsLoadError = '[Contacts] Contacts Load Error'
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

export type ContactsAction = LoadContacts | ContactsLoaded | ContactsLoadError;

export const fromContactsActions = {
  LoadContacts,
  ContactsLoaded,
  ContactsLoadError
};
