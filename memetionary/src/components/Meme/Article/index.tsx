interface Props {
  title: string;
  content: string;
}

export default function Description({ ...props }: Props) {
  return (
    <article className="grid gap-y-4">
      <h3 className="text-xl font-bold">{`${props.title}의 어원`}</h3>
      <p className="whitespace-pre-wrap text-base">{props.content}</p>
    </article>
  );
}
