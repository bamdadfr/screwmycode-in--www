'use client';

import clsx from 'clsx';
import {useAtomValue, useSetAtom} from 'jotai';
import {MoveDownRight, Settings} from 'lucide-react';
import {useState} from 'react';
import {
  isMainDrawerHoverAtom,
  isMainDrawerOpenAtom,
  toggleMainDrawerAtom,
} from 'src/atoms';

import styles from './AppMain.module.scss';

const options = ['today', 'yesterday', 'week', 'month', 'year'];

export const AppMain = ({children}) => {
  const isOpen = useAtomValue(isMainDrawerOpenAtom);
  const setHover = useSetAtom(isMainDrawerHoverAtom);

  return (
    <div className={styles.container}>
      <main className={clsx('flex', styles.main)}>
        <div className={styles.wrapper}>{children}</div>
      </main>

      <aside
        className={clsx(styles.drawer, isOpen ? styles.open : styles.close)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Tooltip />
        <Divider />
        <Options />
      </aside>
    </div>
  );
};

const Divider = () => {
  const isOpen = useAtomValue(isMainDrawerOpenAtom);
  const toggle = useSetAtom(toggleMainDrawerAtom);
  const [isHover, setHover] = useState(false);

  return (
    <span
      className={clsx(
        styles.divider,
        isOpen && styles.dividerOpen,
        isHover && styles.dividerHover,
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={toggle}
    />
  );
};

const Tooltip = () => {
  const isOpen = useAtomValue(isMainDrawerOpenAtom);
  const isHover = useAtomValue(isMainDrawerHoverAtom);
  const toggle = useSetAtom(toggleMainDrawerAtom);

  return (
    <span
      className={clsx(
        styles.tooltip,
        (!isHover || isOpen) && styles.tooltipHidden,
        isHover && styles.tooltipFloat,
      )}
      onClick={toggle}
    >
      <Settings /> <MoveDownRight />
    </span>
  );
};

const Options = () => {
  const [option, setOption] = useState<string>('week');

  return (
    <div className={clsx(styles.options)}>
      {options.map((o) => {
        return (
          <div
            onClick={() => {
              setOption(o);
            }}
            key={o}
            className={clsx(styles.option, option === o && styles.optionActive)}
          >
            {o}
          </div>
        );
      })}
    </div>
  );
};
