import {useMemo} from 'react';
import speedToPercentage from 'speed-to-percentage';
import speedToSemitones from 'speed-to-semitones';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';

interface UseIndicatorsComponent {
  percentage: string;
  semitones: string;
}

export function useIndicatorsComponent(): UseIndicatorsComponent {
  const {speed} = useAudioPlayerContext();

  const percentage = useMemo(
    () => speedToPercentage(speed, 1).toString(),
    [speed],
  );
  const semitones = useMemo(
    () => speedToSemitones(speed, 1).toString(),
    [speed],
  );

  return {
    percentage,
    semitones,
  };
}
