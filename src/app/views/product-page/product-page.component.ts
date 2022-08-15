import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public id: any;
  public product: any;

  constructor(private activatedRoute: ActivatedRoute, private dataService: HttpService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getProduct(this.id);
  }

  getProduct(id: number): void {
    fetch('https://fakestoreapi.com/products/' + id)
      .then(res => res.json())
      .then(json => {
        this.product = json;
      });
  }
}
