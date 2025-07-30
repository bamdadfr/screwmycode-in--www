import {type Metadata} from 'next';
import {metadata as baseMetadata} from 'src/app/layout';
import styles from 'src/app/list.module.scss';
import {CardContainer} from 'src/components/card-container/card-container';
import {fetchListData} from 'src/utils';

export const metadata: Metadata = {
  ...baseMetadata,
  title: `History | ${baseMetadata.title}`,
};

export default async function HistoryPage() {
  const data = await fetchListData('hits');

  return (
    <div className={styles.container}>
      <CardContainer items={data.items} />
    </div>
  );
}
