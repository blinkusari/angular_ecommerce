import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './views/homepage/homepage.component';
import {ContactComponent} from './views/contact/contact.component';
import {AboutComponent} from './views/about/about.component';
import {ShopComponent} from './views/shop/shop.component';
import {ProductPageComponent} from './views/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'product/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
