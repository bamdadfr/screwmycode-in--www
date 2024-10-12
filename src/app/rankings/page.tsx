import {type Metadata} from 'next';
import {metadata as baseMetadata} from 'src/app/layout';
import styles from 'src/app/rankings/page.module.scss';
import {Card} from 'src/components/card/Card';
import {ServerQuery} from 'src/utils/query';

export const metadata: Metadata = {
  ...baseMetadata,
  title: `Rankings | ${baseMetadata.title}`,
};

const RankingsPage = async () => {
  const {data, err} = await ServerQuery.topMonth();

  if (!data || err) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      {data.map((d, k) => {
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

export default RankingsPage;
