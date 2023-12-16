import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  public productDetails: IProductDetails;
  public queryparams:any;
  constructor(private activateRoute:ActivatedRoute){
    this.productDetails = {} as IProductDetails;
    this.queryparams ={}
  }

  public ngOnInit(): void {
      this.queryparams = this.activateRoute.snapshot.queryParams

      this.activateRoute.queryParamMap.subscribe((queryParams:any)=>{
        console.log(queryParams);
        this.productDetails.productId = queryParams.get('productId');
        this.productDetails.productName = queryParams.get('productName');
        this.productDetails.productDescription = queryParams.get('productDescription');
        this.productDetails.productImage = queryParams.get('productImage');
        this.productDetails.productPrice = queryParams.get('productPrice');
      })
  }
}
