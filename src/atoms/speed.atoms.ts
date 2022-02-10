import {atom} from 'jotai';

export const speedAtom = atom(1);

export const setSpeedAtom = atom(
  null,
  (get, set, s: number) => set(speedAtom, () => {
    let speed = s;

    if (s < 0.5) {
      speed = 0.5;
    }

    if (s > 1.5) {
      speed = 1.5;
    }

    return speed;
  }),
);
