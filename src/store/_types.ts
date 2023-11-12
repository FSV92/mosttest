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

export interface IProductsState {
  products: any[];
  currentProduct: {
    id: number | null;
    title: string | null;
    description: string | null;
    price: number | null;
    brand: string | null;
    category: string | null;
    thumbnail: string | null;
    images: string[];

    [key: string]: unknown;
  };

  limitProducts: number;
  skipProducts: number;
  categories: string[];
}
