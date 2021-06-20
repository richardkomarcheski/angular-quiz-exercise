import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { CartService } from './../../core/services/cart/cart.service';
import { Product } from './../../core/models/product';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public products: Product[];
	public productsFiltered: Product[];
	public tags: any[] = [];
	visible = true;
	selectable = true;
	removable = true;
	addOnBlur = true;
	readonly separatorKeysCodes = [ENTER, COMMA] as const;

	constructor(private productsService: ProductsService, private cartService: CartService) {}
	ngOnInit(): void {
		if (!this.products) {
			this.productsService.getProducts().subscribe((response) => {
				this.products = response;
			});
		}
	}

	public filterProducts() {
		return this.products.slice(0, 5);
	}

	addToCart(product: Product) {
		this.cartService.addToCart(product);
		window.alert('Product added to the cart');
	}

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		if (value) {
			this.tags.push({ name: value });
		}

		event.chipInput!.clear();

		this.filterProductsFromTags(this.tags);
	}

	remove(tag: any): void {
		const index = this.tags.indexOf(tag);

		if (index >= 0) {
			this.tags.splice(index, 1);
		}
	}

	filterProductsFromTags(tagsFilter: any) {
		if (tagsFilter.length > 0) {
			this.productsFiltered = this.products.filter((item) => tagsFilter.every((constraint) => item.tags.some((obj) => obj.toString() == constraint.name)));
		} else {
			this.productsFiltered = [];
		}
	}
}
