'use client';

import clsx from 'clsx';
import {useSetAtom} from 'jotai';
import {useAtomValue} from 'jotai/index';
import {Moon, SquareChevronRight, Sun} from 'lucide-react';
import React from 'react';
import {isNavOpenAtom, toggleNavOpenAtom} from 'src/atoms';
import {ScrewK7} from 'src/components/_tomove/ScrewK7';
import {useMobile} from 'src/hooks/useMobile';
import {useTheme} from 'src/hooks/useTheme';

import styles from './AppHeader.module.scss';

export const AppHeader = () => {
  const isOpen = useAtomValue(isNavOpenAtom);
  const toggleOpen = useSetAtom(toggleNavOpenAtom);
  const {isLight, toggle: toggleTheme} = useTheme();
  const {isMobile, isMobileOrTablet} = useMobile();

  return (
    <header className={styles.header}>
      <div onClick={isMobileOrTablet ? toggleOpen : () => undefined}>
        {!isMobileOrTablet && (
          <div className={clsx(styles.home, styles.disabled)}>
            <ScrewK7 />
          </div>
        )}

        {isMobileOrTablet && (
          <a className={clsx(styles.home, isOpen && styles.active)}>
            <ScrewK7
              width={22}
              padding={false}
            />
          </a>
        )}
      </div>

      <div className={styles.input}>
        <input />
        <button type="submit">
          <SquareChevronRight />
        </button>
      </div>

      {!isMobile && (
        <div
          className={styles.theme}
          onClick={toggleTheme}
        >
          {isLight ? <Sun /> : <Moon />}
        </div>
      )}
    </header>
  );
};
