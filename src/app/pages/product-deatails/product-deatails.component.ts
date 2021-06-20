import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Orientation } from '@ngbmodule/material-carousel';
import { Product } from './../../core/models/product';

@Component({
	templateUrl: './product-deatails.component.html',
	styleUrls: ['./product-deatails.component.css']
})
export class ProductDeatailsComponent implements OnInit {
	product: Product = null;
	public parentHeight = 'auto';
	public timings = '250ms ease-in';
	public autoplay = true;
	public interval = 5000;
	public loop = true;
	public hideArrows = false;
	public hideIndicators = false;
	public color: ThemePalette = 'accent';
	public maxWidth = 'auto';
	public maintainAspectRatio = true;
	public proportion = 66;
	public slideHeight = '1080px';
	public useKeyboard = true;
	public useMouseWheel = false;
	public orientation: Orientation = 'ltr';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			this.product = JSON.parse(params.selectedProduct) as Product;
		});
	}
}
