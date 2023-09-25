import { Button } from '@/components/ui/button';
import { CaretDoubleLeft, CaretDoubleRight } from '@phosphor-icons/react';
import { TableTickerPaginationProps } from './types';
import usePagination from '@/shared/hooks/paginate.hooks';

function TableTickerPagination(props: TableTickerPaginationProps) {
  const { page, nextPage, prevPage } = usePagination(props.pagination.page, props.pagination.limit);

  return (
    <div className="flex items-center justify-end space-x-4 ml-auto mt-12">
      <Button
        variant="outline"
        className="h-8 w-8 p-0"
        onClick={prevPage}
        disabled={!page}
      >
        <span className="sr-only">Go to next page</span>
        <CaretDoubleLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" className="h-8 w-8 p-0" onClick={nextPage}>
        <span className="sr-only">Go to next page</span>
        <CaretDoubleRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default TableTickerPagination;
