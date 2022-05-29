import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Client[];
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.listClients();
  }

  listClients() {

    this.clientService.getClientsList().subscribe(
      data => {
        this.clients = data;
      }
    )
   

    

}

}
