import {type Metadata} from 'next';
import {metadata as baseMetadata} from 'src/app/layout';
import {LikesClient} from 'src/app/likes/client';
import {TITLE_SEPARATOR} from 'src/constants';

export const metadata: Metadata = {
  ...baseMetadata,
  title: `${baseMetadata.title} ${TITLE_SEPARATOR} Likes`,
};

export const revalidate = 300;

export default function LikesPage() {
  return <LikesClient />;
}
