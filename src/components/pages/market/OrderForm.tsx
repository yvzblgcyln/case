"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderFormSchema, orderFormDefaultValues, orderFields } from "@/consts";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateOrder } from "@/hooks";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";

export function OrderForm() {
  const { user } = useAuthStore();
  const { mutate: createOrder } = useCreateOrder();

  const form = useForm<z.infer<typeof OrderFormSchema>>({
    resolver: zodResolver(OrderFormSchema),
    defaultValues: orderFormDefaultValues,
  });

  async function onSubmit(data: z.infer<typeof OrderFormSchema>) {
    if (!user) return toast.error("Please log in to continue");

    const payload = {
      userid: user.id,
      amount: data.amount,
      price: data.price,
    };

    createOrder(payload, { onSuccess: handleSuccess });
  }

  const handleSuccess = () => {
    toast.success("Buy order created successfully!");
    form.reset();
  };

  return (
    <div className="w-full max-w-lg space-y-6 flex flex-col bg-gray-900 text-white p-6 rounded-lg  mx-auto font-sans">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          {orderFields.map((fieldDef) => (
            <FormField
              key={fieldDef.name}
              control={form.control}
              name={fieldDef.name as keyof z.infer<typeof OrderFormSchema>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{fieldDef.label}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={fieldDef.type}
                      placeholder={fieldDef.placeholder}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            className="mx-auto bg-amber-500 hover:opacity-75 hover:bg-amber-600 cursor-pointer"
            type="submit"
          >
            Create Buy Order
          </Button>
        </form>
      </Form>
    </div>
  );
}
