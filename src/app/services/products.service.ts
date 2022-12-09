import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import IProduct from "../Models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  products: IProduct[] = [];

  apiRoot = "https://dummyjson.com/products";
  constructor(private http: HttpClient) {}

  gettingProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiRoot}`);
  }
}
