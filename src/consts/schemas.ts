import z from "zod";

export const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export const OrderFormSchema = z.object({
  amount: z.number().min(0.0001, {
    message: "Amount must be greater than 0.",
  }),
  price: z.number().min(0.0001, {
    message: "Price must be greater than 0.",
  }),
});
