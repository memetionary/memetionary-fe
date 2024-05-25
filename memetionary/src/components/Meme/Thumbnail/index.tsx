import Image from 'next/image';

interface ThumbnailProps {
  src?: string;
  title: string;
}

export default function Thumbnail({ src, title }: ThumbnailProps) {
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
    <div className="grid h-80 w-full place-items-center rounded-lg bg-primary-200 text-white">
      <h4 className="bold text-4xl font-semibold">{title}</h4>
    </div>
  );
}
