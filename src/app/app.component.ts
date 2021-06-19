import { Component } from '@angular/core';
import { Product } from './core/models/product';
import { CartService } from './core/services/cart.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public products: Product[];

	constructor(private cartService: CartService) {}

	ngOnInit(): void {
		this.cartService.getProducts().subscribe((response) => {
			this.products = response;
		});
	}

	public filterProducts() {
		return this.products.slice(0, 5);
	}
}
