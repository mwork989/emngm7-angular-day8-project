import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public router :Router){


  }

  public goToProducts(){
   // this.router.navigate(['products'])
    this.router.navigateByUrl('products')
  }
}
