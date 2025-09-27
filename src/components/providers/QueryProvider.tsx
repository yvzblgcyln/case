"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootLayoutProps } from "@/interfaces";

export function QueryProvider({ children }: Readonly<RootLayoutProps>) {
  const [client] = useState(() => new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
