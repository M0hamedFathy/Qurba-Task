import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, switchMap } from "rxjs";
import IProduct from "../Models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  // variables
  apiRoot = "https://dummyjson.com/products";
  products: IProduct[] = [];

  // constructor function
  constructor(private http: HttpClient) {}

  // get all products function
  getAllProducts() {
    return this.http.get(`${this.apiRoot}`);
  }

  // get products  for pagination function
  gettingProducts(skip: number) {
    return this.http.get(`${this.apiRoot}?limit=9&skip=${skip}`);
  }

  //getting categories
  gettingCategories() {
    return this.http.get(`${this.apiRoot}/categories`);
  }

  // getting products according to the categories
  gettingProductsOfCategory(type: string) {
    return this.http.get(`${this.apiRoot}/category/${type}`);
  }

  // search api
  searchProducts(search: string) {
    return this.http.get(`${this.apiRoot}/search?q=${search}`);
  }
}
