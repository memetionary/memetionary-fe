import Bubble from './Bubble';

export interface Props {
  content: string;
}

const SPLIT = '/n';

export default function Conversation({ ...props }: Props) {
  return (
    <div className="grid gap-y-4">
      <h3 className="text-xl font-bold">사용 예시</h3>
      <div className="flex flex-col gap-y-4 rounded-lg bg-gray-100 p-8">
        {props.content.split(SPLIT).map((e, i) => (
          <div key={i} className="flex flex-col">
            <Bubble position={i % 2 ? 'right' : 'left'}>{e}</Bubble>
          </div>
        ))}
      </div>
    </div>
  );
}
