export interface ArticleProps {
  title: string;
  content: string;
}

export default function Article({ ...props }: ArticleProps) {
  return (
    <article className="grid gap-y-4">
      <h3 className="text-xl font-bold">{props.title}</h3>
      <p className="text-base">{props.content}</p>
    </article>
  );
}
