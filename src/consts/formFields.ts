import { FieldDef } from "@/interfaces";

export const loginFields: FieldDef[] = [
  {
    name: "username",
    label: "Username",
    placeholder: "Username",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
  },
];

export const orderFields: FieldDef[] = [
  {
    name: "amount",
    label: "Buy Amount",
    placeholder: "0.0000",
    type: "number",
  },
  {
    name: "price",
    label: "Buy Price (USDT)",
    placeholder: "0.00",
    type: "number",
  },
];

export const loginFormDefaultValues = {
  username: "",
  password: "",
};

export const orderFormDefaultValues = {
  amount: 0,
  price: 0,
};
