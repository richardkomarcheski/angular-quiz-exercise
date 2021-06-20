import { CartComponent } from './pages/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDeatailsComponent } from './pages/product-deatails/product-deatails.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'product', component: ProductDeatailsComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
