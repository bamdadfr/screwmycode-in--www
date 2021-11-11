import { atom } from 'jotai';

export const speedAtom = atom (1);

export const setSpeedAtom = atom (
  null,
  (get, set, newSpeed) => set (speedAtom, () => {
    let speed = parseFloat (newSpeed);

    if (newSpeed < 0.5) {
      speed = 0.5;
    }

    if (newSpeed > 1.5) {
      speed = 1.5;
    }

    return speed;
  }),
);
