import { TickerType } from "@/features/tickers/types/tickers.type";


export type TableTickerProps = {
  tickers: TickerType[] | undefined;
  isLoading: boolean;
}
