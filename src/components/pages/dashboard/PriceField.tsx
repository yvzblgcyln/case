import { useBinanceStore } from "@/store/binanceStore";

export function PriceField() {
  const price = useBinanceStore((state) => state.price);
  return <span className="font-mono">{price ?? "Loading..."}</span>;
}
