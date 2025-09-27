import { BinanceTradeData, SymbolType } from "@/interfaces";

const BINANCE_WS_URL = process.env.NEXT_PUBLIC_BINANCE_WS_URL;

export function binanceWS(
  symbol: SymbolType,
  handleSetPrice: (data: BinanceTradeData) => void
) {
  const ws = new WebSocket(`${BINANCE_WS_URL}${symbol}@trade`);

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    handleSetPrice(data);
  };

  ws.onerror = (err) => console.error("WebSocket error:", err);

  return ws;
}
