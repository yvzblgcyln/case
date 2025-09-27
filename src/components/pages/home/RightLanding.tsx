import React from "react";
import { coins, news } from "@/consts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RightLanding() {
  return (
    <div className="flex-1 flex flex-col gap-6 w-full ">
      <ListingSection />
      <NewsSection />
    </div>
  );
}

function ListingSection() {
  return (
    <div className="bg-white rounded-xl shadow  p-2 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-lg">Popular</span>
        <span className="text-gray-400 text-sm">New Listing</span>
        <p className="text-yellow-400 text-xs font-bold">View All 350+ Coins</p>
      </div>
      <CoinList />
    </div>
  );
}

function CoinList() {
  return (
    <div>
      {coins.map((coin) => {
        const { name, label, image, price, change } = coin;
        const changeColor = change < 0 ? "text-red-500" : "text-green-500";
        const changeText = change < 0 ? change : `+${change}`;

        return (
          <div
            key={name}
            className="flex items-center justify-between py-2 border-b last:border-b-0"
          >
            <div className="flex items-center gap-2">
              <Avatar className="w-7 h-7">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{name}</span>
              <span className="text-gray-500 text-xs">{label}</span>
            </div>

            <div className="flex items-center gap- ">
              <span className="font-mono font-semibold">{price}</span>
              <span
                className={`font-normal min-w-[60px] text-right ${changeColor}`}
              >
                {changeText}%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function NewsSection() {
  return (
    <div className="bg-white rounded-xl shadow  p-2 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-lg">News</span>
        <span className="text-yellow-400 text-xs font-bold">View All News</span>
      </div>

      <ul className="space-y-2">
        {news.map((item) => (
          <p
            key={item}
            className="text-gray-700 text-sm cursor-pointer hover:underline"
          >
            {item}
          </p>
        ))}
      </ul>
    </div>
  );
}
