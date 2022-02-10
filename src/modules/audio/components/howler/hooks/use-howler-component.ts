import {RefObject, useRef} from 'react';
import ReactHowler from 'react-howler';
import {useAtom} from 'jotai';
import {useHowlerDuration} from './use-howler-duration';
import {useHowlerSpeed} from './use-howler-speed';
import {useHowlerVolume} from './use-howler-volume';
import {useHowlerProgress} from './use-howler-progress';
import {useHowlerSeek} from './use-howler-seek';
import {useHowlerEnd} from './use-howler-end';
import {setLoadedAtom} from '../../../../../atoms/load.atoms';
import {isPlayingAtom} from '../../../../../atoms/play-pause.atoms';
import {isRepeatingAtom} from '../../../../../atoms/repeat.atoms';

interface UseHowlerComponent {
  /** Ref containing the Howler instance */
  ref: RefObject<ReactHowler>;
  /** Set true when the audio is loaded */
  setLoaded: (loaded: boolean) => void;
  /** Is the audio playing */
  isPlaying: boolean;
  /** Is the audio repeating */
  isRepeating: boolean;
  /** Current audio speed */
  speed: number;
  /** Current audio volume */
  volume: number;
  /** Function to trigger when the audio ends */
  handleEnd: () => void;
}

/**
 * Entry hook to use the Howler component
 */
export function useHowlerComponent(): UseHowlerComponent {
  const ref = useRef(null);
  const [, setLoaded] = useAtom(setLoadedAtom);
  const [isPlaying] = useAtom(isPlayingAtom);
  const [isRepeating] = useAtom(isRepeatingAtom);
  const speed = useHowlerSpeed(ref.current);
  const volume = useHowlerVolume(ref.current);

  useHowlerDuration(ref.current);
  useHowlerProgress(ref.current);
  useHowlerSeek(ref.current);

  const handleEnd = useHowlerEnd();

  return {
    ref,
    setLoaded,
    isPlaying,
    isRepeating,
    speed,
    volume,
    handleEnd,
  };
}
