import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './core/services/products/products.service';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDeatailsComponent } from './pages/product-deatails/product-deatails.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, ProductDeatailsComponent, CartComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		CommonModule,
		HttpClientModule,
		MatCardModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCarouselModule.forRoot(),
		MatIconModule,
		MatInputModule,
		MatToolbarModule,
		MatChipsModule,
		MatTableModule,
		AppRoutingModule,
		MatCarouselModule.forRoot()
	],
	providers: [HttpClient, ProductsService, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
	bootstrap: [AppComponent]
})
export class AppModule {}
