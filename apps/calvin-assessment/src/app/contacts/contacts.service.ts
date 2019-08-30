import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Entity } from './+state/contacts.reducer';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private afs: AngularFirestore) { }

  getContacts() {
    return this.afs.collection<Entity>('contacts').stateChanges();
  }
}
