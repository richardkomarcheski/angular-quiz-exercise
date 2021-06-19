import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartService } from './core/services/cart.service';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, CommonModule, HttpClientModule],
	providers: [HttpClient, CartService],
	bootstrap: [AppComponent]
})
export class AppModule {}
