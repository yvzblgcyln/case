"use client";
import {
  DefaultLayout,
  PriceGraphProviderContainer,
  PriceTable,
  SymbolSelect,
} from "@/components";
import { BinanceProvider } from "@/store/binanceStore";

export default function Dashboard() {
  return (
    <DefaultLayout>
      <BinanceProvider defaultSymbol="btcusdt">
        <DashboardContent />
      </BinanceProvider>
    </DefaultLayout>
  );
}

function DashboardContent() {
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      <SymbolSelect />
      <PriceTable />
      <PriceGraphProviderContainer />
    </div>
  );
}
