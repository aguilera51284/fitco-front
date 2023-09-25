import TableTickers from '@/features/tickers/ui/tableTickers';
import TableTickerPagination from '@/features/tickers/ui/tableTickerPagination';
import useGetTickerListHook from '@/features/tickers/hooks/useGetTickerListHook';
import useTitleHeader from '@/shared/hooks/titleHeader.hooks';
import { useEffect } from 'react';
function ListTickersPage() {
  const { tickerList, isLoading, pagination } = useGetTickerListHook();
  const setTitle = useTitleHeader((state) => state.changeTitle);

  useEffect(() => {
    setTitle('Dashboard');
    return () => {};
  }, [setTitle]);
  return (
    <>
      <TableTickers tickers={tickerList} isLoading={isLoading} />
      <TableTickerPagination pagination={pagination} />
    </>
  );
}

export default ListTickersPage;
