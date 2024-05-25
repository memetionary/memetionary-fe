import Image from 'next/image';

interface ThumbnailProps {
  src?: string;
  title: string;
  size?: 'lg' | 'md';
}

export default function Thumbnail({ src, title, size }: ThumbnailProps) {
  const sizeStyle = size === 'lg' ? 'h-80' : 'h-ful';
  const textStyle = size === 'lg' ? 'text-4xl' : 'text-xl';

  if (src) {
    return (
      <Image
        className="justify-self-center rounded-lg"
        src={src}
        width={600}
        height={320}
        loading="lazy"
        alt={`${title}-thumbnail`}
      />
    );
  }

  return (
    <div className={`grid w-full place-items-center rounded-lg bg-primary-200 text-white ${sizeStyle}`}>
      <h4 className={`bold font-semibold ${textStyle}`}>{title}</h4>
    </div>
  );
}
