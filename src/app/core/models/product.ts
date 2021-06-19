import { Variant } from './variant';

export interface Product {
	id: string;
	title: string;
	category: string;
	description: string;
	images: string[];
	variants: Variant[];
	price: string;
	tags: string[];
}
