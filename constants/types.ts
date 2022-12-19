import {number} from "prop-types";

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  phone: string;
  email: string;
  password: string;
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
  id: number
}

export interface Products {
  id: 0,
  name: "string",
  description: "string",
  avatar: "string",
  status: "Available",
  price: 0,
  cafeId: 0,
  productVariants: [
    {
      id: 0,
      type: "string"
    }
  ],
  productTypes: [
    {
      id: 0,
      type: "string"
    }
  ]
}

export interface CafeItemProductsResponse {
  foundEntities: Products[],
  totalCount: 0
}


export interface CafeItem {
  id: number,
  name: string,
  distance: string,
  avatar: string,
  address: string,
  rating: string,
}

export interface CafeResponse {
  foundEntities: CafeItem[];
  totalCount: 0;
}

export interface CafeState {
  foundEntities: CafeItem[];
  totalCount: 0;
  cafeItemProducts: CafeItemProductsResponse

}


