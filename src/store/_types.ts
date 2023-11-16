export interface IAction {
  type: string;
  payload?: any;
}

export interface IAuthState {
  users: any[];
  isAuth: boolean;
  user: {
    email: string | null;
    firstName: string | null;
    gender: string | null;
    id: number | null;
    image: string | null;
    lastName: string | null;
    token: string | null;
    username: string | null;
  };
}

export interface ICurrentProduct {
  id: number | string | null;
  title: string | null;
  description: string | null;
  price: number | null;
  brand: string | null;
  category: string | null;
  thumbnail: string | null;
  images: string[];
  quantity?: number | string;

  [key: string]: unknown;
}

export interface IProductsState {
  products: ICurrentProduct[];
  currentProduct: ICurrentProduct;
  limitProducts: number;
  skipProducts: number;
  categories: string[];
}

export interface ICartState {
  id: number | null;
  products: ICurrentProduct[];
  totalProducts: number | string | null;
  totalPrice: number | string;
}
