import { useMutation } from "@tanstack/react-query";
import { orderService } from "@/services";
import { CreateOrderPayload, Order } from "@/interfaces";
import { toast } from "sonner";

export function useCreateOrder() {
  return useMutation<Order, Error, CreateOrderPayload>({
    mutationFn: orderService.create,
    onError: () => {
      toast.error("Error creating buy order");
    },
  });
}
