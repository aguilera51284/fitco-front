import { z } from "zod";

export const Pagination = z.object({
  page: z.number().default(1),
  limit: z.number().default(2),
  count: z.number().optional()
});

export type PaginationType = z.infer<typeof Pagination>
