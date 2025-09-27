import { v4 as uuidv4 } from "uuid";
import { CreateOrderPayload, Order } from "@/interfaces";
import api from "@/lib/axios";

export const orderService = {
  create: async (payload: CreateOrderPayload) => {
    const orderWithId = { ...payload, id: uuidv4() };
    const response = await api.post("/orders", orderWithId);
    return response.data;
  },
};
