import {type Metadata} from 'next';
import {metadata as baseMetadata} from 'src/app/layout';

import HistoryClient from './client';

export const metadata: Metadata = {
  ...baseMetadata,
  title: `History | ${baseMetadata.title}`,
};

export default function HistoryPage() {
  return <HistoryClient />;
}
