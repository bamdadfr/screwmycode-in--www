import React, {useRef} from 'react';
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
import {useHowlerProxy} from './use-howler-proxy';

/**
 * Entry hook to use the Howler component
 *
 * @param {object} options - Options for the Howler component
 * @param {string} options.url - The URL of the audio file
 * @typedef {React.Ref} Ref - The react-howler ref
 * @typedef {Function} SetIsLoaded - Setter for the isLoaded atom
 * @typedef {boolean} IsPlaying - The isPlaying atom
 * @typedef {boolean} IsRepeat - The isRepeat atom
 * @typedef {number} Speed - The speed of the audio
 * @typedef {number} Volume - The volume of the audio
 * @typedef {Function} HandleEnd - Callback for when the audio ends
 * @returns {{Ref,SetIsLoaded,IsPlaying,IsRepeat,Speed,Volume,HandleEnd}} - Howler component state
 */
export function useHowlerComponent({url}) {
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
  const {proxyReady} = useHowlerProxy({url});

  return {
    ref,
    setLoaded,
    isPlaying,
    isRepeating,
    speed,
    volume,
    handleEnd,
    proxyReady,
  };
}
