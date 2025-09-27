"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, loginFormDefaultValues, loginFields } from "@/consts";
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
import { useLogin } from "@/services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { User } from "@/interfaces";

export function LoginForm() {
  const { mutate: handleLogin } = useLogin();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: loginFormDefaultValues,
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { username, password } = data;
    handleLogin(
      { username, password },
      { onSuccess: (user) => user && handleSuccess(user) }
    );
  }

  const handleSuccess = (user: User) => {
    const { id, username, image } = user;
    useAuthStore.getState().login({ id, username, image });
    toast.success("Welcome " + user.username);
    router.push("/dashboard");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 p-8 max-w-lg flex flex-col bg-zinc-900 border border-zinc-700 rounded-lg"
      >
        {loginFields.map((fieldDef) => (
          <FormField
            key={fieldDef.name}
            control={form.control}
            name={fieldDef.name as keyof z.infer<typeof FormSchema>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">
                  {fieldDef.label}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={fieldDef.type}
                    placeholder={fieldDef.placeholder}
                    className="bg-zinc-800 border-zinc-700 text-zinc-100 h-12 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-0 focus-visible:border-amber-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-900 font-bold h-12 text-base"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Form>
  );
}
