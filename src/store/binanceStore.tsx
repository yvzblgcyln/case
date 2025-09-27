"use client";
import React, {
  ReactNode,
  createContext,
  useRef,
  useContext,
  useEffect,
} from "react";
import { createStore, StoreApi, useStore } from "zustand";
import { BinanceTradeData, SymbolType } from "@/interfaces";
import { binanceWS } from "@/utils";

interface StoreProps {
  price: number | null;
  setPrice: (newPrice: number) => void;
  symbol: SymbolType;
  setSymbolAndConnect: (newSymbol: SymbolType) => void;
}

interface BinanceProviderProps {
  children: ReactNode;
  defaultSymbol: SymbolType;
}

const StoreContext = createContext<StoreApi<StoreProps> | null>(null);

export const BinanceProvider = ({
  children,
  defaultSymbol,
}: BinanceProviderProps) => {
  const storeRef = useRef<StoreApi<StoreProps> | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  storeRef.current ??= createStore<StoreProps>((set) => ({
    price: null,
    symbol: defaultSymbol,
    setPrice: (newPrice) => set(() => ({ price: newPrice })),
    setSymbolAndConnect: (newSymbol: SymbolType) => {
      set(() => ({ symbol: newSymbol, price: null }));
      connectWS(newSymbol);
    },
  }));

  const connectWS = (symbol: SymbolType) => {
    wsRef.current?.close();
    wsRef.current = binanceWS(symbol, handleSetPrice);
  };

  const handleSetPrice = (data: BinanceTradeData) => {
    const currentPrice = storeRef.current?.getState().price;
    if (data.p === currentPrice) return;
    storeRef.current?.getState().setPrice(data.p);
  };

  useEffect(() => {
    connectWS(defaultSymbol);
    return () => wsRef.current?.close();
  }, [defaultSymbol]);

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useBinanceStore = <T,>(selector: (state: StoreProps) => T): T => {
  const store = useContext(StoreContext);
  if (!store) throw new Error("Missing BinanceProvider");
  return useStore(store, selector);
};
