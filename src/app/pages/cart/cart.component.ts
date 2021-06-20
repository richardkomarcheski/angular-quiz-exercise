import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from './../../core/models/product';
import { CartService } from './../../core/services/cart/cart.service';

@Component({
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts : Product[];
  displayedColumns: string[] = ['title', 'price','remove'];
  @ViewChild(MatTable) table: MatTable<Product[]>;

	constructor(private cartService: CartService) {}

	ngOnInit(): void {
   this.loadCartProducts();
  }

  loadCartProducts(){
    this.cartProducts = this.cartService.getItems();
  }

  getTotalCost() {
    return this.cartProducts.map(t => Number(t.price)).reduce((acc, value) => acc + value, 0);
  }

  removeFromCart(product: Product) {
		this.cartService.removeFromCart(product);
    this.loadCartProducts();
    this.table.renderRows();
	}
}
