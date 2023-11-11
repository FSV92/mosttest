export interface IAction {
  type: string;
  payload: any;
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
