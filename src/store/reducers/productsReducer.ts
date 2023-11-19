import {
  GET_PRODUCTS,
  GET_CURRENT_PRODUCT,
  UPDATE_SKIP_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS_OF_CATEGORY,
  DECREMENT,
  INCREMENT,
  SET_QUANTITY_CURRENT,
  SET_QUANTITY_CARD,
} from '../_constans';
import {IAuthState, IAction, IProductsState, ICurrentProduct} from '../_types';

class ProductModel {
  constructor(props: ICurrentProduct) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.price = props.price;
    this.brand = props.brand;
    this.category = props.category;
    this.thumbnail = props.thumbnail;
    this.images = props.images;
    this.quantity = props.quantity ? props.quantity : 1;
  }

  [index: string]: any;
}

export const defaultState: IProductsState = {
  products: [],
  currentProduct: {
    id: null,
    title: '',
    description: '',
    price: null,
    brand: '',
    category: '',
    thumbnail: '',
    quantity: 1,
    images: [],
  },
  limitProducts: 10,
  skipProducts: 0,
  categories: [],
};

export const productsReducer = (
  state = defaultState,
  action: IAction,
): IProductsState => {
  let updatedProducts;

  switch (action.type) {
    case GET_PRODUCTS:
      const products = action.payload.map((prod: ICurrentProduct) => {
        return new ProductModel(prod);
      });
      return {
        ...state,
        products: [...state.products, ...products],
      };
    case UPDATE_SKIP_PRODUCTS:
      return {
        ...state,
        skipProducts: state.skipProducts + defaultState.limitProducts,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCTS_OF_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case GET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: {...action.payload},
      };
    case SET_QUANTITY_CURRENT:
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          quantity: action.payload,
        },
      };
    case SET_QUANTITY_CARD:
      updatedProducts = state.products.map(prod => {
        if (prod.id == action.payload.productID) {
          return {
            ...prod,
            quantity: action.payload.quantity,
          };
        }
        return prod;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    case INCREMENT:
      updatedProducts = state.products.map(prod => {
        if (prod.id == action.payload.productID) {
          return {
            ...prod,
            quantity: action.payload.quantity,
          };
        }
        return prod;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    case DECREMENT:
      updatedProducts = state.products.map(prod => {
        if (prod.id == action.payload.productID) {
          return {
            ...prod,
            quantity: action.payload.quantity,
          };
        }
        return prod;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};
