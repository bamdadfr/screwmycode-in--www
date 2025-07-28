import clsx from 'clsx';
import {type ChangeEvent, useCallback, useMemo} from 'react';
import styles from 'src/components/app/app-range.module.scss';
import {type CSSProperties} from 'styled-components';

interface Props {
  min?: number;
  max?: number;
  step?: number;
  onChange: (newValue: number) => void;
  value?: number;
  buffered?: number;
  vertical?: boolean;
}

export const AppRange = ({
  min = 0,
  max = 1,
  step = 0.01,
  value = 0.5,
  buffered = 0,
  onChange,
  vertical = false,
}: Props) => {
  const progressPosition = useMemo(
    () => (value - min) / (max - min),
    [min, max, value],
  );

  const bufferedPosition = useMemo(
    () => (buffered - min) / (max - min),
    [min, max, buffered],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      onChange(newValue);
    },
    [onChange],
  );

  return (
    <div className={clsx(styles.container, vertical && styles.vertical)}>
      <input
        className={clsx(styles.input)}
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        value={value}
        style={
          {
            '--progress': progressPosition.toString(),
            '--buffered': bufferedPosition.toString(),
          } as CSSProperties
        }
      />
    </div>
  );
};
