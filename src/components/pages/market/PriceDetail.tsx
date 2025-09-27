import { PriceField } from "../dashboard";

export function PriceDetail() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-xl mx-auto font-sans">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 rounded-full bg-yellow-500">
          <img
            src="/icons/coins/btc.svg"
            alt="Bitcoin"
            className="min-w-6 h-6"
          />
        </div>

        <h1 className="text-xl md:text-3xl font-bold tracking-tight">
          Bitcoin Price (BTC)
        </h1>

        <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded uppercase">
          HOT
        </span>
      </div>

      <div className="text-xl">
        <span className="text-green-500 font-semibold">BTC to USD:</span>
        <span className="ml-2">
          1 Bitcoin equals{" "}
          <span className="font-bold">
            <PriceField />
          </span>
        </span>
        <span className="ml-4 font-bold text-red-500">
          -1.79%{" "}
          <span className="text-sm font-normal text-gray-400 ml-1">1D</span>
        </span>
      </div>

      <div className="flex space-x-6 mt-6 text-lg text-gray-500 font-semibold border-t border-gray-800 pt-4">
        <span className="text-yellow-500 border-b-2 border-yellow-500 pb-1">
          1D
        </span>
        <span className="hover:text-yellow-500  cursor-pointer">7D</span>
        <span className="hover:text-yellow-500  cursor-pointer">1M</span>
        <span className="hover:text-yellow-500  cursor-pointer">3M</span>
        <span className="hover:text-yellow-500  cursor-pointer">1Y</span>
        <span className="hover:text-yellow-500  cursor-pointer">YTD</span>
      </div>
    </div>
  );
}
