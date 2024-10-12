'use client';

import {useAtomValue} from 'jotai/index';
import styles from 'src/app/rankings/page.module.scss';
import {audioLikesAtom} from 'src/atoms';
import {Card} from 'src/components/card/Card';

const LikesPage = () => {
  const likes = useAtomValue(audioLikesAtom);
  return (
    <div className={styles.container}>
      {likes.map((d, k) => {
        return (
          <Card
            d={d}
            key={k}
          />
        );
      })}
    </div>
  );
};

export default LikesPage;
