interface VideoProps {
  src: string;
}

export default function Video({ ...props }: VideoProps) {
  return (
    <div className="grid gap-y-4">
      <h3 className="text-xl font-bold">관련 이미지 및 동영상</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ReKRSTB5PK8?si=aejO38_VUs1behAi"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="justify-self-center"
      ></iframe>
    </div>
  );
}
