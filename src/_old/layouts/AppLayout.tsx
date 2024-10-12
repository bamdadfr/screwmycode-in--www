import {type ReactNode} from 'react';
import {AppAudio} from 'src/components/app/AppAudio';
import {AppFooter} from 'src/components/app/AppFooter';
import {AppHeader} from 'src/components/app/AppHeader';
import {AppMain} from 'src/components/app/AppMain';
import {AppNav} from 'src/components/app/AppNav';

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
