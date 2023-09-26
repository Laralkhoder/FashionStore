import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  constructor(private http: HttpClient) {}

  allProduct: Product[] = [];

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      map(products => products.filter(product => product.category !== 'electronics'))
    );
  }
  getProductById(id: number) {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }
  getCategories(){
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories').pipe(
      map(category => category.filter(category => category !== 'electronics'))
  )}
  getProductsByCategory(category:any){
return this.http.get('https://fakestoreapi.com/products/category/'+category);
  }
}
