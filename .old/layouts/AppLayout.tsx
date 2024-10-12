import {type ReactNode} from 'react';
import {AppAudio} from 'src/components/app/app-audio';
import {AppFooter} from 'src/components/app/app-footer';
import {AppHeader} from 'src/components/app/app-header';
import {AppMain} from 'src/components/app/app-main';
import {AppNav} from 'src/components/app/app-nav';

import styles from './AppLayout.module.scss';

interface Props {
  children?: ReactNode;
}

export const AppLayout = ({children}: Props) => {
  return (
    <>
      <AppAudio />

      <div className={styles.app}>
        <AppHeader />
        <AppNav />
        <AppMain>{children}</AppMain>
        <AppFooter />
      </div>
    </>
  );
};
