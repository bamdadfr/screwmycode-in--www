'use client';

import clsx from 'clsx';
import {Construction, MoveDownRight, Settings} from 'lucide-react';
import {JSX, useState} from 'react';
import styles from 'src/components/app/app-main.module.scss';
import {useDrawer} from 'src/hooks/use-drawer';

const options = ['today', 'yesterday', 'week', 'month', 'year'];

interface Props {
  children: JSX.Element;
}

export const AppMain = ({children}: Props) => {
  const {isOpen, setIsHover} = useDrawer();

  return (
    <div className={styles.container}>
      <main className={clsx('flex', styles.main)}>
        <div className={styles.wrapper}>{children}</div>
      </main>

      <aside
        className={clsx(styles.drawer, isOpen ? styles.open : styles.close)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Tooltip />
        <Divider />
        <Options />
      </aside>
    </div>
  );
};

const Divider = () => {
  const {isOpen, toggleIsOpen} = useDrawer();
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
      onClick={toggleIsOpen}
    />
  );
};

const Tooltip = () => {
  const {isOpen, toggleIsOpen, isHover} = useDrawer();

  return (
    <span
      className={clsx(
        styles.tooltip,
        (!isHover || isOpen) && styles.tooltipHidden,
        isHover && styles.tooltipFloat,
      )}
      onClick={toggleIsOpen}
    >
      <Settings /> <MoveDownRight />
    </span>
  );
};

const Options = () => {
  const [option, setOption] = useState<string>('week');
  const underConstruction = true;

  return (
    <div className={clsx(styles.options)}>
      <div style={{color: 'white'}}>
        <Construction />
      </div>
      {!underConstruction &&
        options.map((o) => {
          return (
            <div
              onClick={() => {
                setOption(o);
              }}
              key={o}
              className={clsx(
                styles.option,
                option === o && styles.optionActive,
              )}
            >
              {o}
            </div>
          );
        })}
    </div>
  );
};
