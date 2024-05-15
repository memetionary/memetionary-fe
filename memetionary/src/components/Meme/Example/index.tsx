import Bubble from './Bubble';

export interface ExampleProps {
  id: number;
  name: 'me' | 'you';
  content: string;
}
[];

export default function Example({ list }: { list: ExampleProps[] }) {
  return (
    <div className="grid gap-y-4">
      <h3 className="text-xl font-bold">사용 예시</h3>
      <div className="bg-gray-50 px-14 py-8">
        {list.reverse().map((e) => (
          <div key={e.id} className="flex flex-col">
            <Bubble position={e.name === 'me' ? 'right' : 'left'}>{e.content}</Bubble>
          </div>
        ))}
      </div>
    </div>
  );
}
