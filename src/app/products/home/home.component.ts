import { Component, DoCheck, ViewChild } from "@angular/core";
import { skip } from "rxjs";
import IProduct from "src/app/shared/Models/product.model";
import { ProductsService } from "src/app/shared/services/products.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements DoCheck {
  // getting the category value
  @ViewChild("category") category!: string;

  //variables
  currentPage = 1;
  categories!: [];
  products: IProduct[] = [];
  originalProducts!: IProduct[];
  allProductsForSearch!: IProduct[];
  paginationStart = 0;
  checkedProducts: IProduct[] = [];
  total!: number;
  limit!: number;
  skip!: number;
  searchValue: string = "Products";

  isLoaded: boolean = false;

  // Functions that needs to be executed once the component is rendered
  constructor(private productService$: ProductsService) {
    this.getAllProducts();
    this.gettingAllCategories();
    this.getAllProductsForSearch();
  }

  // functions and logic that need to be executed once any change
  ngDoCheck(): void {
    // catching the search value
    const searchValue = String(sessionStorage.getItem("search"));

    //setting the title in case the session storage is empty
    if (!searchValue) this.searchValue = "Products";

    //function guard for the search functionality
    if (!sessionStorage.getItem("search")) return;

    //setting the title
    this.searchValue = searchValue;

    //executing the search function
    this.searchProducts(searchValue);
  }

  // get products according to the category
  getProductsOfCategory(category: string, e: any) {
    // guard in case the box is not checked
    if (!e.target.checked) {
      this.checkedProducts = this.checkedProducts.filter(
        (obj: IProduct) => obj.category !== category
      );
      this.products = this.checkedProducts;
      if (!this.products.length) this.getAllProducts();

      // incase the box is checked
    } else {
      this.productService$
        .gettingProductsOfCategory(category)
        .subscribe((res: any) => {
          let categoryOfProducts: [] = [];
          const { products, skip } = res;
          categoryOfProducts = products;
          categoryOfProducts = products;
          this.limit = 9;
          this.skip = skip;
          this.checkedProducts = [
            ...this.checkedProducts,
            ...categoryOfProducts,
          ];
          this.total = this.checkedProducts.length;
          this.products = this.checkedProducts.slice(0, 9);
        });
    }
  }

  // getting all products and setting the products at the products array
  getAllProducts(skip: number = 0) {
    this.productService$.gettingProducts(skip).subscribe((res: any) => {
      const { products, total, limit, skip } = res;
      this.products = products;
      this.total = total;
      this.limit = limit;
      this.skip = skip;
      this.originalProducts = products;
      this.isLoaded = true;
    });
  }

  // getting all categories function
  gettingAllCategories() {
    this.productService$.gettingCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  //getting all products for search functionality
  getAllProductsForSearch() {
    this.productService$.getAllProducts().subscribe((res: any) => {
      this.allProductsForSearch = res.products;
    });
  }

  // search logic
  searchProducts(value: string) {
    const searchValue = value.toLocaleLowerCase();
    const products = this.allProductsForSearch?.slice();

    this.products = products?.filter((it) => {
      return Object.values(it)
        .toString()
        .toLocaleLowerCase()
        .includes(searchValue);
    });
  }

  // change page for the pagination and getting products logic
  changePage(page: number) {
    this.currentPage = page;
    this.getAllProducts((this.currentPage - 1) * 9);
  }
}
