import Image from 'next/image';

interface Props {
  scale?: number;
}

const x = 144;
const y = 251;

export const ScrewShare = ({scale = 1}: Props) => {
  return (
    <div>
      <Image
        src="/icons/SCRW_SHARE.svg"
        alt="share"
        width={scale * x}
        height={scale * y}
      />
    </div>
  );
};
