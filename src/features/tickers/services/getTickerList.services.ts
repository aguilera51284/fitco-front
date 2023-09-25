import httpService from '@/lib/http';
import { PaginationType } from '@/shared/types/pagination';
import { TickerServiceResponseType } from '../types/tickers.type';

const getChatSupportServiceOrder = async (params: PaginationType): Promise<TickerServiceResponseType> => {
  return await httpService
    .get('v1/tickers', {
      searchParams: params,
    })
    .json();
};

export default getChatSupportServiceOrder;
