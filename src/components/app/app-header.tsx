'use client';

import clsx from 'clsx';
import {Moon, Sun} from 'lucide-react';
import {useCallback} from 'react';
import {ScrewK7} from 'src/components/_tomove/screw-k7';
import styles from 'src/components/app/app-header.module.scss';
import {AppHeaderInput} from 'src/components/app/app-header-input';
import {useMobile} from 'src/hooks/use-mobile';
import {useNav} from 'src/hooks/use-nav';
import {useTheme} from 'src/hooks/use-theme';

export const AppHeader = () => {
  const {isOpen, toggleIsOpen} = useNav();
  const {isLightTheme, toggle: toggleTheme} = useTheme();
  const {isMobile, isMobileOrTablet} = useMobile();

  const handleK7Click = useCallback(() => {
    if (isMobileOrTablet) {
      toggleIsOpen();
    }
  }, [isMobileOrTablet, toggleIsOpen]);

  return (
    <header className={styles.header}>
      <div onClick={handleK7Click}>
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

      <AppHeaderInput />

      {!isMobile && (
        <div
          className={styles.theme}
          onClick={toggleTheme}
        >
          {isLightTheme ? <Sun /> : <Moon />}
        </div>
      )}
    </header>
  );
};
