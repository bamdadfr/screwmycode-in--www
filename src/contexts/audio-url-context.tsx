import React, {createContext, useContext, useMemo, useState} from 'react';

type AudioUrl = string | null;

type IContext = {
  url: AudioUrl;
  setUrl: React.Dispatch<React.SetStateAction<AudioUrl>>;
};

const AudioUrlContext = createContext<IContext>({} as IContext);

export function AudioUrlContextProvider({children}) {
  const [url, setUrl] = useState<string | null>(null);
  const memoizedUrl = useMemo(() => url, [url]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AudioUrlContext.Provider value={{url: memoizedUrl, setUrl}}>
      {children}
    </AudioUrlContext.Provider>
  );
}

export function useAudioUrlContext() {
  return useContext(AudioUrlContext);
}
