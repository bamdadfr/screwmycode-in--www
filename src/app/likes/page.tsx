'use client';

import styles from 'src/app/list.module.scss';
import {CardContainer} from 'src/components/card-container/card-container';
import {useLikes} from 'src/hooks/use-likes';
import {useToken} from 'src/hooks/use-token';

export default function LikesPage() {
  const {token} = useToken();
  const {likes} = useLikes();

  if (!token) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <CardContainer
        medias={likes}
        token={token}
      />
    </div>
  );
}
