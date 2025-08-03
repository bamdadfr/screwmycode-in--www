import {useQuery} from '@tanstack/react-query';
import {type MediaDto} from 'src/dtos';

export function useImageLoader(media: MediaDto | null) {
  const {
    data: blobUrl,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['image', media?.image],
    queryFn: async () => {
      if (!media?.image) {
        return null;
      }

      const response = await fetch(media.image);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    },
    enabled: !!media?.image,
    staleTime: Infinity, // Images don't change
    gcTime: 30 * 60 * 1000, // Keep for 30 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return {
    blobUrl: blobUrl ?? null,
    isLoading,
    error: error as Error | null,
  };
}
