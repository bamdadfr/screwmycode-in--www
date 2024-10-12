import {type Metadata} from 'next';
import {metadata as baseMetadata} from 'src/app/layout';
import RankingsClient from 'src/app/rankings/client';
 
export const metadata: Metadata = {
  ...baseMetadata,
  title: `Rankings | ${baseMetadata.title}`,
};

export default async function async() {
  return <RankingsClient />;
}
