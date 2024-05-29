interface VideoProps {
  src: string;
}

export default function Video({ ...props }: VideoProps) {
  const SHARE_LINK = 'https://youtu.be';
  const URL_LINK = 'https://www.youtube.com/watch?v=';
  const EMBEDED_LINK = 'https://www.youtube.com/embed';

  const replaceEmbededLink = (link: string) => {
    if (link.includes(SHARE_LINK)) {
      return link.replace(SHARE_LINK, EMBEDED_LINK);
    }
    if (link.includes(URL_LINK)) {
      return link.replace(URL_LINK, EMBEDED_LINK + '/');
    }
    return link;
  };

  const embededLink = replaceEmbededLink(props.src);

  return (
    <div className="relative grid w-full gap-y-4 pb-[56.25%] pt-[30px]">
      <h3 className="text-xl font-bold">관련 이미지 및 동영상</h3>
      <iframe
        className="absolute h-[80%] w-full justify-self-center"
        width="100%"
        height="auto"
        src={embededLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
