import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TableCellShimmer from '@/components/shared/TableCellShimmer';
import currency from 'currency.js';
import { Link } from "wouter"
import { TableTickerProps } from './types';

function TableTickers(props: TableTickerProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>EOD Price</TableHead>
            <TableHead>Acronimo</TableHead>
            <TableHead>País</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!props.isLoading
            ? props.tickers?.map((ticker) => (
                <TableRow>
                  <TableCell>
                    <Link href={`/${ticker.symbol}`} className="hover:text-yellow-500">
                      {ticker.symbol}
                    </Link>
                  </TableCell>
                  <TableCell>{ticker.name}</TableCell>
                  <TableCell>
                    {currency(ticker.latestClosePrice || 0).format()}
                  </TableCell>
                  <TableCell>
                    {ticker.exchangeAcronym}
                  </TableCell>
                  <TableCell>
                    {ticker.exchangeCountry}
                  </TableCell>
                </TableRow>
              ))
            : Array(5)
                .fill(1)
                .map(() => <TableCellShimmer cellCount={5} />)}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableTickers;
