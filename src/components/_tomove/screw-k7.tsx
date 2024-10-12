import clsx from 'clsx';
import Image from 'next/image';

import styles from './screw-k7.module.scss';

interface Props {
  width?: number;
  padding?: boolean;
}

export const ScrewK7 = ({width = 30, padding = true}: Props) => {
  return (
    <div className={clsx(styles.wrapper, padding && styles.padding)}>
      <Image
        src="/icons/SCRW_KSET.svg"
        alt="cassette tape"
        width={width}
        height={width}
      />
    </div>
  );
};
