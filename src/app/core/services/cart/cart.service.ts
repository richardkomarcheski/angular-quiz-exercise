import { Product } from './../../models/product';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	items: Product[] = [];

	addToCart(product: Product) {
		this.items.push(product);
	}

	removeFromCart(product: Product) {
		console.log('🚀 ~ file: cart.service.ts ~ line 18 ~ CartService ~ this.items.forEach ~ this.items', this.items);

		this.items.forEach((element) => {
			if (element.id == product.id) {
				this.items.splice(this.items.indexOf(element), 1);
			}
		});
		console.log('🚀 ~ file: cart.service.ts ~ line 18 ~ CartService ~ this.items.forEach ~ this.items', this.items);
	}

	getItems() {
		return this.items;
	}

	clearCart() {
		this.items = [];
		return this.items;
	}
}
