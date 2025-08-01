import {atom, useAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';
import {useCallback} from 'react';
import {LOCAL_STORAGE_KEY} from 'src/constants';

const domReferenceAtom = atom<HTMLAudioElement | null>(null);
const isPlayingAtom = atom<boolean>(false);
const isRepeatAtom = atom<boolean>(true);
const durationAtom = atom<number>(0);
const progressAtom = atom<number>(0);
const bufferAtom = atom<number>(0);
const seekAtom = atom<number | null>(null);
const speedAtom = atomWithStorage<number>(
  LOCAL_STORAGE_KEY.enum.AUDIO_SPEED,
  0.84,
);
const volumeAtom = atomWithStorage<number>(
  LOCAL_STORAGE_KEY.enum.AUDIO_VOLUME,
  0.7,
);
const sourceAtom = atom<string>('');
const isLoadingAtom = atom<boolean>(false);
const isErrorAtom = atom<boolean>(false);

export function useAudioState() {
  const [domReference, setDomReference] = useAtom(domReferenceAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [isRepeat, setIsRepeat] = useAtom(isRepeatAtom);
  const [duration, setDuration] = useAtom(durationAtom);
  const [progress, setProgress] = useAtom(progressAtom);
  const [buffer, setBuffer] = useAtom(bufferAtom);
  const [seek, setSeek] = useAtom(seekAtom);
  const [speed, setSpeed] = useAtom(speedAtom);
  const [volume, setVolume] = useAtom(volumeAtom);
  const [source, setSource] = useAtom(sourceAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [isError, setIsError] = useAtom(isErrorAtom);

  const toggleIsPlaying = useCallback(
    () => setIsPlaying((p) => !p),
    [setIsPlaying],
  );

  const updateSource = useCallback(
    (newSource: string) => {
      setSource(newSource);
      setIsLoading(true);
    },
    [setSource, setIsLoading],
  );

  const purgeSource = useCallback(() => {
    setSource('');
    setIsLoading(false);
  }, [setSource, setIsLoading]);

  const updateSeek = useCallback(
    (position: number) => {
      if (position > buffer - 1) {
        return;
      }

      setSeek(position);
    },
    [buffer, setSeek],
  );

  return {
    domReference,
    setDomReference,
    isPlaying,
    setIsPlaying,
    toggleIsPlaying,
    isRepeat,
    setIsRepeat,
    duration,
    setDuration,
    progress,
    setProgress,
    buffer,
    setBuffer,
    seek,
    setSeek,
    updateSeek,
    speed,
    setSpeed,
    volume,
    setVolume,
    source,
    updateSource,
    purgeSource,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  };
}
