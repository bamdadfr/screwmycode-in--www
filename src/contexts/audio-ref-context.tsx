import React, {
  createContext,
  type MutableRefObject,
  useContext,
  useRef,
} from 'react';

type Audio = HTMLAudioElement | null;

const AudioRefContext = createContext<MutableRefObject<Audio>>(
  {} as MutableRefObject<Audio>,
);

export function AudioRefContextProvider({children}) {
  const audioRef = useRef<Audio>(null);

  return (
    <AudioRefContext.Provider value={audioRef}>
      {children}
    </AudioRefContext.Provider>
  );
}

export function useAudioRefContext() {
  return useContext(AudioRefContext);
}
