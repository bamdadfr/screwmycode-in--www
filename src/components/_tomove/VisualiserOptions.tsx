import {useSetAtom} from 'jotai/index';
import {RotateCcw} from 'lucide-react';
import {type ChangeEvent, useCallback} from 'react';
import {textureResettingAtom, visualiserScaleAtom} from 'src/atoms';

export const VisualiserOptions = () => {
  const setScale = useSetAtom(visualiserScaleAtom);
  const setResetting = useSetAtom(textureResettingAtom);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newScale = Number(e.target.value);
      setScale(newScale);
    },
    [setScale],
  );

  const reset = () => {
    setResetting(true);
  };

  return (
    <>
      <button onClick={reset}>
        <RotateCcw />
      </button>
      <input
        type="range"
        min={0.01}
        max={0.99}
        step={0.001}
        onChange={handleChange}
      />
    </>
  );
};
