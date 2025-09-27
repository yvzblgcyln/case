"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { PriceGraphContainerProps, PriceTableProps } from "@/interfaces";
import { usePriceHistory } from "@/hooks";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { memo, useMemo } from "react";
import { useBinanceStore } from "@/store/binanceStore";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const options = { animation: { duration: 0 } };

export function PriceGraphProviderContainer() {
  const symbol = useBinanceStore((state) => state.symbol);
  const price = useBinanceStore((state) => state.price);
  return <PriceGraph {...{ symbol, price }} />;
}

export const PriceGraph = memo(function PriceGraph(
  props: Readonly<PriceTableProps>
) {
  const { symbol, price } = props;
  const { historicalPrices, labels } = usePriceHistory(symbol, price);
  const isLoading = !historicalPrices.length;

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "USDT",
          data: historicalPrices,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    }),
    [labels, historicalPrices]
  );

  return <PriceGraphContainer isLoading={isLoading} data={data} />;
});

const PriceGraphContainer = memo(function PriceGraphContainer(
  props: Readonly<PriceGraphContainerProps>
) {
  const { isLoading, data } = props;
  return (
    <div className="w-full h-96 md:h-[500px] max-h-[500px] flex items-center justify-center">
      {isLoading ? <Loader /> : <Line data={data} options={options} />}
    </div>
  );
});

function Loader() {
  return (
    <div className="flex flex-col items-center">
      <LoadingSpinner size="md" />
      <span className="text-gray-400 text-lg">Loading...</span>
    </div>
  );
}
