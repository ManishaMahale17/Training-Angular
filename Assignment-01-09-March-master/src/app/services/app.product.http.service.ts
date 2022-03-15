import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../models/app.communication.model';
import { Product, Product2 } from '../models/app.product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductHTTPService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8889/products?page=0&size=10';
  }
  getProds(): Observable<any>{
    let res:Observable<any>
     res = this.http.get<any>(this.url);
     console.log("res "+res);

     return res;
  }

  searchProducts(criteria:string): Observable<any>{
    console.log("Criteria "+criteria);

    let res:Observable<any>
     res = this.http.get<any>(`http://localhost:8889/products/${criteria}?page=0&size=10`);
     return res;
  }

  saveProducts(p:Product2):Observable<any>{
    let res:Observable<any>
    res = this.http.post<any>(`http://localhost:8889/products`,p);
    return res;
  }

  updateProducts(id:number,data:any):Observable<any>{
    let res:Observable<any>
    res = this.http.put<any>(`http://localhost:8889/product/${id}`,data);
    return res;
  }

  getProdctsById(id:number):Observable<any>{
    let res:Observable<any>
    res = this.http.get<any>(`http://localhost:8889/product/${id}`);
    return res;
  }
  deleteProduct(id:number){
    let res:Observable<any>
    res = this.http.delete<any>(`http://localhost:8889/product/${id}`);
    return res;
  }
}
