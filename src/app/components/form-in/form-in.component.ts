import { Component, OnInit } from '@angular/core';

import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service'

@Component({
  selector: 'app-form-in',
  templateUrl: './form-in.component.html',
  styleUrls: ['./form-in.component.css']
})
export class FormInComponent implements OnInit {

  client = {} as Client;
  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
  }

  addClient() {
    this.clientService.addClient(this.client);
    this.client = {} as Client;
  }

}
