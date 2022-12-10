import { Action } from "@ngrx/store";
import IProduct from "../Models/product.model";

export const GET_PRODUCTS: string = "GET_PRODUCTS";

export class GetProducts implements Action {
  readonly type: string = GET_PRODUCTS;
  payload!: IProduct[];
}
