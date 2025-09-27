"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SymbolType } from "@/interfaces";
import { symbolOptions } from "@/consts";
import { useBinanceStore } from "@/store/binanceStore";

export function SymbolSelect() {
  const symbol = useBinanceStore((state) => state.symbol);
  const setSymbolAndConnect = useBinanceStore(
    (state) => state.setSymbolAndConnect
  );

  return (
    <Select
      defaultValue={symbol}
      onValueChange={(val: SymbolType) => setSymbolAndConnect(val)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Coin" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {symbolOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
