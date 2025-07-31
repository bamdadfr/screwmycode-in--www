'use client';

import clsx from 'clsx';
import {
  AudioLines,
  Blocks,
  Heart,
  ListRestart,
  ListStart,
  TrendingUp,
} from 'lucide-react';
import {useEffect} from 'react';
import styles from 'src/components/app/app-nav.module.scss';
import {AppNavButton} from 'src/components/app/app-nav-button';
import {useMobile} from 'src/hooks/use-mobile';
import {useNav} from 'src/hooks/use-nav';

export const AppNav = () => {
  const {isOpen, setIsOpen} = useNav();
  const {isMobileOrTablet} = useMobile();

  useEffect(() => {
    // entering mobile view
    if (isMobileOrTablet) {
      setIsOpen(false);
    }

    // exiting mobile view
    if (!isMobileOrTablet) {
      setIsOpen(true);
    }
  }, [isMobileOrTablet, setIsOpen]);

  return (
    <nav className={clsx(styles.sidebar, isOpen ? styles.open : styles.close)}>
      <AppNavButton
        href="/"
        title="Now Playing"
      >
        <AudioLines />
      </AppNavButton>

      <AppNavButton
        href="/queue"
        title="Queue"
      >
        <ListStart />
      </AppNavButton>

      <AppNavButton
        href="/likes"
        title="Likes"
      >
        <Heart />
      </AppNavButton>

      <AppNavButton
        title="Rankings"
        href="/rankings"
      >
        <TrendingUp />
      </AppNavButton>

      <AppNavButton
        href="/history"
        title="History"
      >
        <ListRestart />
      </AppNavButton>

      <AppNavButton
        title="Extensions"
        href="/extensions"
      >
        <Blocks />
      </AppNavButton>
    </nav>
  );
};
