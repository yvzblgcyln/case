"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SYMBOL_PAIR } from "@/consts";
import { useBinanceStore } from "@/store/binanceStore";

export function PriceTable() {
  const symbol = useBinanceStore((state) => state.symbol);

  return (
    <Table className="mt-6 w-full border border-gray-700 rounded-md overflow-hidden bg-gray-900 text-white">
      <TableHeader className="bg-gray-800">
        <TableRow>
          <TableHead className="w-[80px] text-left px-3 py-2 text-gray-400 uppercase text-sm">
            Coin
          </TableHead>
          <TableHead className="text-left px-3 py-2 text-gray-400 text-sm">
            Price (USDT)
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow className="border-t border-gray-700 hover:bg-gray-800 transition-colors">
          <TableCell className="uppercase px-3 py-2 font-semibold text-sm">
            {SYMBOL_PAIR[symbol]}
          </TableCell>
          <TableCell className="font-mono px-3 py-2 text-green-400 text-sm">
            <PriceField />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function PriceField() {
  const price = useBinanceStore((state) => state.price);
  return <span className="font-mono">{price ?? "Loading..."}</span>;
}
