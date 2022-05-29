import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produits: Produit[];
  constructor(private produitService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    
      this.listProduits();

   

    
  }
  updateProduit(id:number){
    this.router.navigate(['home/editProduct',id])
  }
  listProduits() {

    this.produitService.getProduitList().subscribe(
      data => {
        this.produits = data;
      }
    )
   

    

}

}
