interface TagProps {
  color: keyof typeof tagStyle;
  children: React.ReactNode;
}

export const tagStyle = {
  red: 'bg-rose-500 text-white',
  pink: 'bg-pink-400 text-white',
  brown: 'bg-stone-600 text-white',
  purple: 'bg-violet-400 text-white',
  green: 'bg-green-500 text-white',
  yellow: 'bg-yellow-400 text-black',
  gray: 'bg-gray-400 text-white',
  blue: 'bg-blue-400 text-white',
  orange: 'bg-orange-400 text-white',
  default: 'bg-gray-300 text-black',
};

export default function Tag({ ...props }: TagProps) {
  return (
    <div className={`w-fit rounded-lg border border-solid border-gray-200 p-2 text-xs ${tagStyle[props.color]}`}>
      {props.children}
    </div>
  );
}
