import {type Metadata} from 'next';
import {metadata as baseMetadata} from 'src/app/layout';
import styles from 'src/app/list.module.scss';
import {CardContainer} from 'src/components/card-container/card-container';
import {fetchMedias, generateToken} from 'src/utils';

export const metadata: Metadata = {
  ...baseMetadata,
  title: `History | ${baseMetadata.title}`,
};

export const revalidate = 300;

export default async function HistoryPage() {
  const token = await generateToken();
  const medias = await fetchMedias(token);

  return (
    <div className={styles.container}>
      <CardContainer
        medias={medias}
        token={token}
      />
    </div>
  );
}
