import { Component, OnInit } from '@angular/core';

import { ClientService } from '../../services/client.service';
import { std } from 'mathjs';

@Component({
  selector: 'app-form-out',
  templateUrl: './form-out.component.html',
  styleUrls: ['./form-out.component.css']
})
export class FormOutComponent implements OnInit {

  clients = [];
  average = 0.0;
  stdDev = 0.0;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    let list = [];
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      for (let client in this.clients) {
        list.push(this.clients[client]["edad"]);
      }
      let averageTemp = list.reduce((total, value) => total + value, 0) / list.length;
      this.average = averageTemp.toFixed(2);
      let stdDevTemp = std(list);
      this.stdDev = stdDevTemp.toFixed(2);
    });
  }
}
