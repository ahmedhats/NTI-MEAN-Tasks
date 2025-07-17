import { Component } from '@angular/core';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {



  // constructor() {
  //   console.log("🔧 constructor(): Called once when the component is created. Ideal for basic initialization (no input bindings yet).");
  // }
  
  // ngOnChanges() {
  //   console.log("📦 ngOnChanges(): Called whenever an input property changes (even before ngOnInit).");
  // }
  
  // ngOnInit() {
  //   console.log("🚀 ngOnInit(): Called once after the first ngOnChanges(). Safe place to fetch data and set up the component.");
  // }
  
  // ngOnDestroy() {
  //   console.log("🧹 ngOnDestroy(): Called just before the component is destroyed. Perfect for cleanup (unsubscribe, clear timers, etc.).");
  // }
}
