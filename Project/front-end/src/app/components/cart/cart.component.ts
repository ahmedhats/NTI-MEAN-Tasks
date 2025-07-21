import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products = [
    {
      _id: '661a1a1a1a1a1a1a1a1a1a1a',
      name: 'Wireless Headphones',
      price: 59.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=128&q=80'
    },
    {
      _id: '661a1a1a1a1a1a1a1a1a1a1b',
      name: 'Smart Watch',
      price: 120.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80'
    },
    {
      _id: '661a1a1a1a1a1a1a1a1a1a1c',
      name: 'Bluetooth Speaker',
      price: 35.50,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=128&q=80'
    }
  ];

  addProduct(product: any) {
    // Stub: Add product logic
  }

  increaseQuantity(productId: string) {
    const product = this.products.find(p => p._id === productId);
    if (product) {
      product.quantity++;
    }
  }

  decreaseQuantity(productId: string) {
    const product = this.products.find(p => p._id === productId);
    if (product && product.quantity > 1) {
      product.quantity--;
    } else if (product && product.quantity === 1) {
      this.removeProduct(productId);
    }
  }

  removeProduct(productId: string) {
    this.products = this.products.filter(p => p._id !== productId);
  }
} 