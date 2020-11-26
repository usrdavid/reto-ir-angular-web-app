import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  clientsCollection: AngularFirestoreCollection<Client>;
  clients: Observable<Client[]>;

  // ageList = [];

  constructor(firestore: AngularFirestore) {
    // this.clients = firestore.collection('clientes').valueChanges();
    this.clientsCollection = firestore.collection('clientes');
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );   
  }

  getClients() {
    // console.log(this.ageList);
    return this.clients;
  }

  addClient(client: Client) {
    this.clientsCollection.add(client);
  }

}