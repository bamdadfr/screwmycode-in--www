import React, {
  createContext,
  type MutableRefObject,
  useContext,
  useRef,
} from 'react';

type AudioRef = HTMLAudioElement | null;
type Context = MutableRefObject<AudioRef>;

const AudioRefContext = createContext<Context>({} as Context);

export function AudioRefContextProvider({children}) {
  const audioRef = useRef<AudioRef>(null);

  return (
    <AudioRefContext.Provider value={audioRef}>
      {children}
    </AudioRefContext.Provider>
  );
}

export function useAudioRefContext() {
  return useContext(AudioRefContext);
}
