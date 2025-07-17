import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // allProd;
  
  // constructor() {
  //   const prodArr = new ProductsService();
  //   this.allProd = prodArr.testArr;
  //   console.log(prodArr.testArr)
  // }

  // constructor(private arr:ProductsService){//SOLID
  //   this.allProd = this.arr.testArr;  
  //   console.log(this.allProd);
  // }
}
