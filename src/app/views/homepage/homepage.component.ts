import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Subscription} from 'rxjs';
import {APIResponse, Product} from '../../models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // @ts-ignore
  public products: APIResponse<Product>;
  // @ts-ignore
  private productSub: Subscription;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productSub = this.httpService
      .getProducts('8')
      .subscribe((productsList: APIResponse<Product>) => {
        this.products = productsList;
      });
  }
}
