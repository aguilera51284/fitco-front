import { z } from 'zod';

const EODSchema = z.object({
  openPrice: z.number(),
  closePrice: z.number(),
  highPrice: z.number(),
  lowPrice: z.number(),
  volume: z.number(),
  date: z.date(),
});

const TickerDetailSchema = z.object({
  symbol: z.string(),
  name: z.string(),
  exchangeName: z.string(),
  exchangeAcronym: z.string(),
  exchangeCountry: z.string(),
  eodInformation: EODSchema,
});

export type TickerDetailDto = z.infer<typeof TickerDetailSchema>;
export type EODDto = z.infer<typeof EODSchema>;
