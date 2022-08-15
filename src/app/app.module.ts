import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {HttpService} from './services/http.service';
import { ProductPageComponent } from './views/product-page/product-page.component';
import { ShopComponent } from './views/shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    StatisticsComponent,
    ProductCardComponent,
    ProductPageComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
