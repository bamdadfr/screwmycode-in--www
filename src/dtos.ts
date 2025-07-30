import {z} from 'zod';

export const StreamType = z.enum(['audio', 'image']);
export type StreamType = z.infer<typeof StreamType>;

export const MediaDto = z.object({
  title: z.string(),
  url: z.string(),
  hits: z.int(),
  audio: z.string(),
  image: z.string(),
});

export type MediaDto = z.infer<typeof MediaDto>;

export const MediasResponse = z.object({
  items: z.array(MediaDto),
});

export type MediasResponse = z.infer<typeof MediasResponse>;
