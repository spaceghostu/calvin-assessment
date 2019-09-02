import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Entity } from './+state/contacts.reducer';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private afs: AngularFirestore) { }

  geAll() {
    return this.afs.collection<Entity>('contacts').stateChanges();
  }

  add(contact) {
    return this.afs.collection<Entity>('contacts').add(contact);
    
  }

  update(contact) {
    const {id, ...data} = contact;
    return this.afs.doc(`/contacts/${id}`).update(data);
  }
  
  delete(contact) {
    const { id } = contact;
    return this.afs.doc(`/contacts/${id}`).delete();
  }
}
