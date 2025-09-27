import { User } from "@/interfaces";
import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useLogin() {
  return useMutation<
    User | null,
    Error,
    { username: string; password: string }
  >({
    mutationFn: ({ username, password }) => login(username, password),
  });
}

async function login(username: string, password: string) {
  const res = await api.get("/users", {
    params: { username, password },
  });

  if (res.data.length > 0) return res.data[0];

  toast.error("User not found", {
    description: "Please check your credentials and try again.",
  });

  return null;
}
