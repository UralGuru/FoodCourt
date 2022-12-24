export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserRegisterRequest {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  accessToken: string;
  errors: string;
  expireDate: string;
  isSuccess: boolean;
  message: string;
  refreshToken: string;
}

export interface PropsId {
  id: number;
}

export interface Products {
  id: 0;
  name: 'string';
  description: 'string';
  avatar: 'string';
  status: 'Available';
  price: 0;
  cafeId: 0;
  productVariants: [
    {
      id: 0;
      type: 'string';
    }
  ];
  productTypes: [
    {
      id: 0;
      type: 'string';
    }
  ];
}

export interface CafeItemProductsResponse {
  foundEntities: Products[];
  totalCount: 0;
}

export interface CafeItem {
  id: number;
  name: string;
  distance: string;
  avatar: string;
  address: string;
  rating: string;
}

export interface CafeResponse {
  foundEntities: CafeItem[];
  totalCount: 0;
}

export interface CafeState {
  foundEntities: CafeItem[];
  totalCount: 0;
  cafeItemProducts: CafeItemProductsResponse;
}

export interface BasketResponse {
  totalPrice: number;
  totalProductsCount: number;
  status: 'Empty' | 'NotEmpty';
  cafesBaskets: CafeBasket[];
}

export interface CafeBasket {
  id: number;
  name: string;
  products: BasketProductResponse[];
}

export interface BasketProductResponse {
  id: number;
  name: string;
  description: string;
  avatar: string;
  status: 'Available' | 'NotAvailable' | 'Soon' | 'Sale';
  price: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  weight: number;
  kcal: number;
  cafeId: number;
  productVariants: {
    id: number;
    type: string;
  };
  productTypes: [
    {
      id: number;
      type: string;
    }
  ];
  productId: number;
  count: number;
}



export interface SearchResponseOfOrderResponse {
  foundEntities: OrderResponse[];
  totalCount: number;
}

export interface OrderState extends SearchResponseOfOrderResponse {
  orderItem: OrderResponse
}

export interface OrderResponse {
  id: number;
  status: OrderStatus;
  totalPrice: number;
  creationTime: string;
  comment: string;
  cafeId: number;
  cafeName: string;
  products: BasketProductResponse[]
}

export enum OrderStatus {
  Created = 'Created',      // создано
  InQueue = 'InQueue',      // в очереди
  InWork = 'InWork',        // в работе
  Ready = 'Ready',          // готов
  Issued = 'Issued',        // получен
  Cancelled = 'Cancelled',  // отменен
}
