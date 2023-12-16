import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductDetails } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit{
  public productDetails: IProductDetails[];
  constructor(public productService: ProductService, public router: Router) {
    this.productDetails = [];
  }
  public ngOnInit(): void {
    this.productService.getProducts().subscribe((data: IProductDetails[]) => {
      console.log(data)
      this.productDetails = data;
    });
  }

  public navigateToProductDetails(product:IProductDetails){
    //route params are mandatory
    // user/:id  --> /user/1 
    this.router.navigate(['/product-details'],{
      queryParams:{
        productId: product.productId,
        productName: product.productName,
    
        productPrice: product.productPrice,
        productImage: product.productImage  
      }
    })
  }

  public navigateToProductInfo(product:IProductDetails){
    //query params
    // user?age=23
    this.router.navigate(['/product-info',product.productId,product.productName,product.productImage,product.productDescription])
  }
}
