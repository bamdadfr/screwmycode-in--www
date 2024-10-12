import clsx from 'clsx';
import {useSetAtom} from 'jotai';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useMemo} from 'react';
import {isNavOpenAtom} from 'src/atoms';
import {useMobile} from 'src/hooks/useMobile';

import styles from './AppNavButton.module.scss';

interface Props {
  href: string;
  title: string;
  children: JSX.Element;
}

export const AppNavButton = ({href, children, title}: Props) => {
  const setOpen = useSetAtom(isNavOpenAtom);
  const pathname = usePathname();
  const active = useMemo(() => href === pathname, [href, pathname]);
  const {isMobileOrTablet} = useMobile();

  return (
    <Link
      className={clsx(styles.link, active && styles.active)}
      href={href}
      onClick={isMobileOrTablet ? () => setOpen(false) : () => undefined}
    >
      {children} <span>{title}</span>
    </Link>
  );
};
