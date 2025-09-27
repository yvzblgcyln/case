"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { SymbolType } from "@/interfaces/pages/dashboard";

const PRICE_HISTORY_LENGTH = 30;

export function usePriceHistory(symbol: SymbolType, price: number | null) {
  const [historicalPrices, setHistoricalPrices] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const priceRef = useRef(price);

  // Update price ref and generate initial history when price changes
  useEffect(() => {
    priceRef.current = price;
    if (price && !historicalPrices.length) generatePriceHistory(price);
  }, [price]);

  // Reset data and start periodic updates when symbol changes
  useEffect(() => {
    setHistoricalPrices([]);
    setLabels([]);
    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval);
  }, [symbol]);

  // Add current price to history arrays (removes oldest, adds newest)
  const updateData = () => {
    const currentPrice = priceRef.current;
    if (currentPrice == null) return;

    setHistoricalPrices((prev) => {
      const numericPrice = Number(currentPrice);
      return [...prev.slice(1), parseFloat(numericPrice.toFixed(2))];
    });

    setLabels((prev) => {
      const newLabel = new Date();
      return [...prev.slice(1), newLabel.toLocaleTimeString()];
    });
  };

  // Generate mock historical data with timestamps going backwards
  const generatePriceHistory = useCallback((initialPrice: number) => {
    const basePrice = Number(initialPrice);
    const currentTime = new Date();

    const newPrices = Array.from({ length: PRICE_HISTORY_LENGTH }, () => {
      const randomChange = (Math.random() - 0.5) * 0.02; // -0.01 to +0.01 range
      return parseFloat((basePrice + randomChange).toFixed(2));
    });
    setHistoricalPrices(newPrices);

    const newLabels = Array.from(
      { length: PRICE_HISTORY_LENGTH },
      (_, index) => {
        const time = new Date(
          currentTime.getTime() - (PRICE_HISTORY_LENGTH - 1 - index) * 1000
        );
        return time.toLocaleTimeString();
      }
    );

    setLabels(newLabels);
  }, []);

  return { historicalPrices, labels };
}
