import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  produit:Produit =new Produit();

  constructor(private produitService: ProduitService,  private router: Router) { }

  ngOnInit(): void {
  }
addProduit(){
  this.produitService.postProduit(this.produit).subscribe(
    data=> {
     console.log(data); 
     this.goToListProduit(); 
      

    });
}
goToListProduit(){
  this.router.navigate(['home'])
}

onSubmit(){
  this.addProduit()
}
}
