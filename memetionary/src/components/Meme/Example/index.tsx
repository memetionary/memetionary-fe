import Bubble from './Bubble';

export interface ExampleProps {
  list: {
    id: number;
    name: 'me' | 'you';
    content: string;
  }[];
}

export default function Example({ ...props }: ExampleProps) {
  return (
    <div className="grid gap-y-4">
      <h3 className="text-xl font-bold">사용 예시</h3>
      <div className="flex flex-col gap-y-4 rounded-lg bg-gray-100 p-8">
        {props.list.reverse().map((e) => (
          <div key={e.id} className="flex flex-col">
            <Bubble position={e.name === 'me' ? 'right' : 'left'}>{e.content}</Bubble>
          </div>
        ))}
      </div>
    </div>
  );
}
