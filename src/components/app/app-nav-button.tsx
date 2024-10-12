import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {JSX, useCallback, useMemo} from 'react';
import styles from 'src/components/app/app-nav-button.module.scss';
import {useMobile} from 'src/hooks/use-mobile';
import {useNav} from 'src/hooks/use-nav';

interface Props {
  href: string;
  title: string;
  children: JSX.Element;
}

export const AppNavButton = ({href, children, title}: Props) => {
  const {setIsOpen} = useNav();
  const pathname = usePathname();
  const active = useMemo(() => href === pathname, [href, pathname]);
  const {isMobileOrTablet} = useMobile();

  const handleClick = useCallback(() => {
    if (isMobileOrTablet) {
      setIsOpen(false);
    }
  }, [isMobileOrTablet, setIsOpen]);

  return (
    <Link
      className={clsx(styles.link, active && styles.active)}
      href={href}
      onClick={handleClick}
    >
      {children} <span>{title}</span>
    </Link>
  );
};
