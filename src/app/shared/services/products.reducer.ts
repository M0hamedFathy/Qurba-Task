import IProduct from "../Models/product.model";
import * as ProductsActions from "./products.actions";

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."],
    },
  ],
};

export function productsReducer(
  state = initialState,
  action: ProductsActions.GetProducts
) {
  switch (action.type) {
    case ProductsActions.GET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default: {
      return state;
    }
  }
}
