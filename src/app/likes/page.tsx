'use client';

import {Construction} from 'lucide-react';
import styles from 'src/app/rankings/page.module.scss';
import {Card} from 'src/components/card/card';
import {useLikes} from 'src/hooks/use-likes';

export default function LikesPage() {
  const {likes} = useLikes();

  return (
    <div className={styles.container}>
      <Construction />
      {likes.map((item) => {
        return (
          <Card
            key={item.url}
            item={item}
          />
        );
      })}
    </div>
  );
}
