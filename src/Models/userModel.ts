export type UserLoginModel = {
    email: string,
    password: string
}

export interface UserLoginResult {
    email: string,
    accessToken: string
}

/* userProfile*/
export interface UserProfile {
    ordersHistory: OrdersHistory[];
    email: string;
    name: string;
    password: null;
    gender: boolean;
    phone: string;
    facebookId: string;
    deleted: boolean;
    avatar: string;
}

export interface OrdersHistory {
    orderDetail: OrderDetail[];
    id: number;
    date: Date;
    status: null;
    email: string;
    alias: string;
}
export interface OrderDetail {
    name: string;
    alias: string;
    shortDescription: string;
    quantity: number;
    price: number;
    image: string;
    description: string;
}


export interface UserState {
    userLogin: UserLoginResult,
    userProfile: UserProfile | null
}

export type FacebookDataLogin = {
    facebookToken:string
}