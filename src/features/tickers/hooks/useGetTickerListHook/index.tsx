import { useLocationProperty } from 'wouter/use-location';
import { Pagination, PaginationType } from '@/shared/types/pagination';
import GetTickerListQuery from '@/features/tickers/queries/getTickerListQuery';

const useGetTickerListHook = () => {
  const limit = useLocationProperty(() => {
    const limitQueryParam = new URLSearchParams(window.location.search).get(
      'limit',
    );
    const parsedLimit = limitQueryParam ? parseInt(limitQueryParam) : 2;
    return isNaN(parsedLimit) ? null : parsedLimit;
  });

  const page = useLocationProperty(() => {
    const limitQueryParam = new URLSearchParams(window.location.search).get(
      'page',
    );
    const parsedPage = limitQueryParam ? parseInt(limitQueryParam) : 1;
    return isNaN(parsedPage) ? null : parsedPage;
  });

  const params: PaginationType = Pagination.parse({ page, limit });
  const { data, isLoading, error, pagination } = GetTickerListQuery(params);

  return { tickerList: data, isLoading, error, pagination };
};

export default useGetTickerListHook;
