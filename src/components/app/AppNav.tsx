'use client';

import clsx from 'clsx';
import {useAtom} from 'jotai';
import {
  AudioLines,
  Blocks,
  Heart,
  ListRestart,
  ListStart,
  TrendingUp,
} from 'lucide-react';
import {useEffect} from 'react';
import {isNavOpenAtom} from 'src/atoms';
import {AppNavButton} from 'src/components/app/AppNavButton';
import {useMobile} from 'src/hooks/useMobile';

import styles from './AppNav.module.scss';

export const AppNav = () => {
  const [isOpen, setOpen] = useAtom(isNavOpenAtom);
  const {isMobileOrTablet} = useMobile();

  useEffect(() => {
    // entering mobile view
    if (isMobileOrTablet) {
      setOpen(false);
    }

    // exiting mobile view
    if (!isMobileOrTablet) {
      setOpen(true);
    }
  }, [isMobileOrTablet, setOpen]);

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
        href="/likes"
        title="Likes"
      >
        <Heart />
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
