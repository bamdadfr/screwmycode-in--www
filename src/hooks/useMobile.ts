'use client';

import {useEffect, useMemo, useState} from 'react';

const mobile = 576;
const tablet = 768;
const desktop = 992;

export const useMobile = () => {
  const [isTablet, setTablet] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setMobile(w <= mobile);
      setTablet(w > mobile && w <= tablet);
      setDesktop(w > tablet && w <= desktop);
    };

    check();

    window.addEventListener('resize', check);

    return () => {
      window.removeEventListener('resize', check);
    };
  }, []);

  const isMobileOrTablet = useMemo(
    () => isMobile || isTablet,
    [isMobile, isTablet],
  );

  return {
    isMobile,
    isTablet,
    isDesktop,
    isMobileOrTablet,
  };
};
