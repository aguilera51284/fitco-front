import { PaginationType } from '@/shared/types/pagination'
import {TickerType} from '@/features/tickers/types/tickers.type'

export type GetTickerListQueryTpe = {
  data: TickerType[] | undefined,
  pagination?: PaginationType ,
  isLoading: boolean,
  error: Error | null
}
