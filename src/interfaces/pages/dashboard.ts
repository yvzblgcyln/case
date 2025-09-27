export type SymbolType = "btcusdt" | "ethusdt";

export interface SymbolSelectProps {
  value: SymbolType;
  onChange: (value: SymbolType) => void;
}

export interface PriceTableProps {
  symbol: SymbolType;
  price: number | null;
}
export interface PriceGraphContainerProps {
  isLoading: boolean;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      fill: boolean;
    }[];
  };
}
