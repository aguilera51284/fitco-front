import { TableCell, TableRow } from '@/components/ui/table';

type TableCellShimmerProps = {
  cellCount: number;
};

function TableCellShimmer(props: TableCellShimmerProps) {
  return (
    <TableRow>
      {Array(props.cellCount)
        .fill(1)
        .map(() => (
          <TableCell>
            <div className="animate-pulse flex space-x-4">
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
          </TableCell>
        ))}
    </TableRow>
  );
}

export default TableCellShimmer;
