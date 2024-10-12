import {z} from 'zod';

export const ListRange = z.enum([
  'today',
  'yesterday',
  'week',
  'month',
  'year',
  'all',
]);

export type ListRange = z.infer<typeof ListRange>;

export const ListSortBy = z.enum(['hits', 'date']);
export type ListSortBy = z.infer<typeof ListSortBy>;

export const ListBody = z.object({
  sort_by: ListSortBy,
  range: ListRange,
  limit: z.number().default(10),
});

export type ListBody = z.infer<typeof ListBody>;

export const StreamType = z.enum(['audio', 'image']);
export type StreamType = z.infer<typeof StreamType>;

export const StreamBody = z.object({
  url: z.string(),
  type: StreamType,
});

export type StreamBody = z.infer<typeof StreamBody>;

export const ListItem = z.object({
  hits: z.int(),
  title: z.string(),
  url: z.string(),
});

export type ListItem = z.infer<typeof ListItem>;

export const ListResponse = z.object({
  sort_by: ListSortBy,
  range: ListRange,
  limit: z.int(),
  length: z.int(),
  items: z.array(ListItem),
});

export type ListResponse = z.infer<typeof ListResponse>;

export const MediaResponse = z.object({
  media_url: z.string(),
  expires_in: z.int(),
  item: ListItem,
  error: z.string().optional(),
});

export type MediaResponse = z.infer<typeof MediaResponse>;
