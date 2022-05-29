import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from '../model/facture';
import { FactureService } from '../service/facture.service';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {

  factures:Facture[];

  constructor(private factureService: FactureService, private router: Router) { }

  ngOnInit(): void {
    this.listFactures();
  }

  listFactures() {

    this.factureService.getFacturesList().subscribe(
      data => {
        this.factures = data;
      }
    )
  }

}
