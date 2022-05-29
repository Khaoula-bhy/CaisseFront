import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  produit:Produit;
  id:number;
  constructor(private produitService: ProduitService,private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
    this.produit=new Produit();
    this.id=this.route.snapshot.params['id'];
    this.produitService.getProduitById(this.id).subscribe(data=>{
      this.produit=data
    })
  }

  onSubmit(){
    this.produitService.updateProduit(this.produit).subscribe(data=>{
      this.goToListProduit();
    })
  }
  
goToListProduit(){
  this.router.navigate(['home'])
}

}
