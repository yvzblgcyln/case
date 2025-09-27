export enum SYMBOL_PAIR {
  btcusdt = "BTC",
  ethusdt = "ETH",
}

export const symbolOptions = Object.keys(SYMBOL_PAIR).map((key) => ({
  label: `${SYMBOL_PAIR[key as keyof typeof SYMBOL_PAIR]}/USDT`,
  value: key,
}));
