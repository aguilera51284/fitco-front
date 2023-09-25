import { useQuery } from '@tanstack/react-query';
import { PaginationType } from '@/shared/types/pagination';
import getTickerListService from '@/features/tickers/services/getTickerList.services';

const GetTickerListQuery = (params: PaginationType) => {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['GetListTickers', {params}],
    queryFn: async () => await getTickerListService(params),
    retry: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });

  const pagination: PaginationType = {
    count: data?.count || 0,
    limit: data?.limit || 0,
    page: data?.page || 0,
  }

  return {
    isLoading,
    data: data?.data,
    pagination: pagination ,
    isFetching,
    error,
  };
};

export default GetTickerListQuery;
