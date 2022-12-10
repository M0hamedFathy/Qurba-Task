import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { ProductsModule } from "./products/products.module";
import { SharedModule } from "./shared/shared.module";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PaginationModule } from "./pagination/pagination.module";
import { FormsModule } from "@angular/forms";
// import { StoreModule } from "@ngrx/store";
// import { productsReducer } from "./services/products.reducer";

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    PaginationModule,
    ProductsModule,
    HttpClientModule,
    FontAwesomeModule,

    // StoreModule.forRoot({ prducts: productsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
