'use client';

import {useEffect, useState} from 'react';
import styles from 'src/app/rankings/page.module.scss';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {Card} from 'src/components/card/card';
import {ListResponse} from 'src/dtos';
import {useHistoryData} from 'src/hooks/use-history-data';

export default function HistoryClient() {
  const [data, setData] = useState<ListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const {fetchData} = useHistoryData();
  const {isLoading} = useAudioState();

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      {isLoading && <div className={styles.overlay} />}
      {data?.items.map((item) => {
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
