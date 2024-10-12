import {type GetServerSideProps} from 'next';
import {Redirect} from 'src/_old/utils/redirect';

export default function LatestPage() {}

export const getServerSideProps: GetServerSideProps = async () => Redirect.last;
