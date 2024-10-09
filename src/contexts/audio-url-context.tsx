import React, {createContext, useContext, useMemo, useState} from 'react';

type AudioUrl = string | null;

type Context = {
  url: AudioUrl;
  setUrl: React.Dispatch<React.SetStateAction<AudioUrl>>;
};

const AudioUrlContext = createContext<Context>({} as Context);

export function AudioUrlContextProvider({children}) {
  const [url, setUrl] = useState<string | null>(null);
  const context = useMemo(() => ({url, setUrl}), [url, setUrl]);

  return (
    <AudioUrlContext.Provider value={context}>
      {children}
    </AudioUrlContext.Provider>
  );
}

export function useAudioUrlContext() {
  return useContext(AudioUrlContext);
}
