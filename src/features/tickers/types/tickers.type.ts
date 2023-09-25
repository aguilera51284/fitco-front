import { z } from 'zod';

const TickerSchema = z.object({
  symbol: z.string(),
  name: z.string(),
  latestClosePrice: z.number().optional(),
  exchangeAcronym: z.string(),
  exchangeCountry: z.string(),
});

export const TickerServiceResponse = z.object({
  data: TickerSchema.array(),
  count: z.number(),
  limit: z.number(),
  page: z.number()
});


export type TickerServiceResponseType = z.infer<typeof TickerServiceResponse>

export type TickerType = z.infer<typeof TickerSchema>;
