import {useAtom} from 'jotai';
import {useCallback} from 'react';
import {audioAtom, audiosAtom, type EnrichedAudio} from 'src/atoms';
import {type AudioDto} from 'src/utils/dtos';

// TODO: later
export const useAudio = () => {
  const [audio, setAudio] = useAtom(audioAtom);
  const [audios, setAudios] = useAtom(audiosAtom);

  const set = useCallback(
    (dto: AudioDto) => {
      console.log('audios', audios);

      const result = audios.find(
        (a) => a.type === dto.type && a.slug === dto.slug,
      );

      if (result) {
        console.log('retrieve', result);
        return setAudio(result);
      }

      const enriched: EnrichedAudio = {
        ...dto,
        speed: {
          values: [],
          average: null,
        },
      };

      setAudio(audio);
      setAudios((es) => [...es, enriched]);
      console.log('created', enriched);
    },
    [audio, audios, setAudio, setAudios],
  );

  return {
    set,
  };
};
