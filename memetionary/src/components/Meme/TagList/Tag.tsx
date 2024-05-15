interface TagProps {
  isDanger: boolean;
  children: React.ReactNode;
}

export default function Tag({ isDanger, children }: TagProps) {
  const dangerStyle = 'bg-rose-500 text-white';
  return (
    <div className={`w-fit p-2 border border-solid border-gray-200 rounded-lg text-xs ${isDanger ? dangerStyle : ''}`}>
      {children}
    </div>
  );
}
