export interface Order {
  id: string;
  userid: string | number;
  amount: number;
  price: number;
}

export interface CreateOrderPayload {
  userid: string | number;
  amount: number;
  price: number;
}

export interface OrderFormData {
  amount: number;
  price: number;
}
