import { Product } from './../../core/models/product';
import { CartService } from './../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public products: Product[];

	constructor(private cartService: CartService) {}
	ngOnInit(): void {
		if (!this.products) {
			this.cartService.getProducts().subscribe((response) => {
				this.products = response;
			});
		}
	}

	public filterProducts() {
		return this.products.slice(0, 5);
	}
}
