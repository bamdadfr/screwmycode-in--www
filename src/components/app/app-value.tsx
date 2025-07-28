import React from 'react';
import styles from 'src/components/app/app-value.module.scss';

export const AppLabel = ({children = 'name'}: {children: string}) => {
  return <div className={styles.label}>{children}</div>;
};

export const AppValue = ({children = 'v'}: {children: string}) => {
  return (
    <input
      className={styles.value}
      disabled
      value={children}
    />
  );
};
