import {atom} from 'jotai';

export const speedAtom = atom(1);

export const setSpeedAtom = atom(
  null,
  (_get, set, s: string) => set(speedAtom, () => {
    let speed = parseFloat(s);

    if (speed < 0.5) {
      speed = 0.5;
    } else if (speed > 1.5) {
      speed = 1.5;
    }

    return speed;
  }),
);
