import React, {
  type ChangeEvent,
  createContext,
  type Dispatch,
  type MutableRefObject,
  type SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

type Ref = HTMLAudioElement | null;
type Title = string | null;
type Artwork = string | null; // url
type Url = string | null;
type Speed = number;
type Volume = number;
type Buffered = number; // amount in time
type Duration = number; // amount in time
type Playing = boolean;
type Progress = number; // amount in time
type Repeating = boolean;
type Seek = number; // amount in time (requested by the user)
type Ready = boolean;

type Context = {
  ref: MutableRefObject<Ref>;
  title: Title;
  setTitle: Dispatch<SetStateAction<Title>>;
  artwork: Artwork;
  setArtwork: Dispatch<SetStateAction<Artwork>>;
  url: Url;
  setUrl: Dispatch<SetStateAction<Url>>;
  speed: Speed;
  setSpeed: (speed: string) => void;
  volume: Volume;
  setVolume: Dispatch<SetStateAction<Volume>>;
  buffered: Buffered;
  setBuffered: Dispatch<SetStateAction<Buffered>>;
  duration: Duration;
  setDuration: Dispatch<SetStateAction<Duration>>;
  isPlaying: Playing;
  togglePlaying: () => void;
  play: () => void;
  progress: Progress;
  setProgress: Dispatch<SetStateAction<Progress>>;
  isRepeating: Repeating;
  toggleRepeating: () => void;
  seek: Seek;
  handleSeek: (e: ChangeEvent<HTMLInputElement>) => void;
  isReady: Ready;
  setReady: Dispatch<SetStateAction<Ready>>;
};

const PlayerContext = createContext<Context>({} as Context);

interface Props {
  children: JSX.Element | JSX.Element[];
  initialData: {
    title: Title;
    image: Artwork;
    audio: Url;
    speed: Speed;
  };
}

export function PlayerContextProvider({children, initialData}: Props) {
  const ref = useRef<Ref>(null);
  const [title, setTitle] = useState<Title>(initialData.title);
  const [artwork, setArtwork] = useState<Artwork>(initialData.image);
  const [url, setUrl] = useState<Url>(initialData.audio);
  const [speed, setSpeed] = useState<Speed>(initialData.speed);
  const [volume, setVolume] = useState<Volume>(0.7);
  const [buffered, setBuffered] = useState<Buffered>(0);
  const [duration, setDuration] = useState<Duration>(0);
  const [isPlaying, setPlaying] = useState<Playing>(false);
  const [progress, setProgress] = useState<Progress>(0);
  const [isRepeating, setRepeating] = useState<Repeating>(true);
  const [seek, setSeek] = useState<Seek>(0);
  const [isReady, setReady] = useState<Ready>(false);

  const setSpeedSanitized = useCallback((newSpeed: string) => {
    let newSpeedFloat = parseFloat(newSpeed);

    if (newSpeedFloat < 0.5) {
      newSpeedFloat = 0.5;
    } else if (newSpeedFloat > 1.5) {
      newSpeedFloat = 1.5;
    }

    setSpeed(newSpeedFloat);
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((p) => !p);
  }, []);

  const play = useCallback(() => {
    if (isPlaying) {
      return;
    }

    setPlaying(true);
  }, [isPlaying]);

  const toggleRepeating = useCallback(() => {
    setRepeating((r) => !r);
  }, []);

  const handleSeek = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const position = Math.floor(parseFloat(e.target.value));

      if (position > buffered) {
        return;
      }

      setSeek(position);
    },
    [buffered],
  );

  const context = useMemo(
    () => ({
      ref,
      title,
      setTitle,
      artwork,
      setArtwork,
      url,
      setUrl,
      speed,
      setSpeed: setSpeedSanitized,
      volume,
      setVolume,
      buffered,
      setBuffered,
      duration,
      setDuration,
      isPlaying,
      togglePlaying,
      play,
      progress,
      setProgress,
      isRepeating,
      toggleRepeating,
      seek,
      handleSeek,
      isReady,
      setReady,
    }),
    [
      title,
      artwork,
      url,
      speed,
      setSpeedSanitized,
      volume,
      buffered,
      duration,
      isPlaying,
      togglePlaying,
      play,
      progress,
      isRepeating,
      toggleRepeating,
      seek,
      handleSeek,
      isReady,
    ],
  );

  return (
    <PlayerContext.Provider value={context}>{children}</PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  return useContext(PlayerContext);
}
