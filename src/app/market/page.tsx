"use client";
import {
  DefaultLayout,
  OrderForm,
  PriceDetail,
  PriceGraphProviderContainer,
} from "@/components";
import { BinanceProvider } from "@/store/binanceStore";
import { useAuthStore } from "@/store/useAuthStore";
import React from "react";

export default function Market() {
  return (
    <DefaultLayout>
      <BinanceProvider defaultSymbol="btcusdt">
        <MarketContainer />
      </BinanceProvider>
    </DefaultLayout>
  );
}

function MarketContainer() {
  const { user } = useAuthStore();

  return (
    <div>
      <h1 className="page-title">Market</h1>
      <div
        className={`w-full flex gap-4 ${
          user ? "flex-col-reverse md:flex-row" : "flex-col"
        }`}
      >
        <div className={user ? "flex-2" : "w-full"}>
          <PriceGraphProviderContainer />
        </div>

        {user && (
          <div className="flex-1 gap-2 flex flex-col">
            <PriceDetail />
            <OrderForm />
          </div>
        )}
      </div>
    </div>
  );
}
