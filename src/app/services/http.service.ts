import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment as env} from 'src/environments/environment';
import {APIResponse, Product} from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts(limit?: string, sort?: string): Observable<APIResponse<Product>> {
    let params;
    if (limit) {
      params = new HttpParams().set('limit', limit);
    }
    if (sort) {
      params = new HttpParams().set('sort', sort);
    }

    return this.http.get<APIResponse<Product>>(`${env.BASE_URL}/products`, {
      params,
    });
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${env.BASE_URL}/products/categories`);
  }

  getCategoryProducts(category: string): Observable<APIResponse<Product>> {
    return this.http.get<APIResponse<Product>>(`${env.BASE_URL}/products/category/` + category);
  }
}
