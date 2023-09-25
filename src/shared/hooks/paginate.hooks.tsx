import { useEffect, useCallback } from 'react';
import { navigate } from 'wouter/use-location';

function usePagination(defaultPage = 1, defaultLimit = 10) {
  const page = defaultPage;
  const limit = defaultLimit;

  const goToPage = useCallback(
    (newPage: number) => {
      if (newPage !== page) {
        navigate(`?page=${newPage}`);
      }
    },
    [page],
  );

  const nextPage = useCallback(() => {
    console.log('activate')
    goToPage(page  + 1);
  }, [goToPage, page]);

  const prevPage = useCallback(() => {
    if (page  > 1) {
      goToPage(page  - 1);
    }
  }, [goToPage, page]);

  useEffect(() => {
  }, [page, limit]);

  return {
    page,
    limit,
    goToPage,
    nextPage,
    prevPage,
  };
}

export default usePagination;
