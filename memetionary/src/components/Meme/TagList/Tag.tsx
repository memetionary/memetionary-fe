interface TagProps {
  isDanger: boolean;
  children: React.ReactNode;
}

export default function Tag({ ...props }: TagProps) {
  const dangerStyle = 'bg-rose-500 text-white';
  return (
    <div
      className={`w-fit rounded-lg border border-solid border-gray-200 p-2 text-xs ${props.isDanger ? dangerStyle : ''}`}
    >
      {props.children}
    </div>
  );
}
