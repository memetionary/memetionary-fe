import * as icons from '@/components/Test/icons';
import { RANK } from '@/components/Test/constant';

export interface RankType {
  type: keyof typeof icons;
  name: string;
  subDescription: string;
  description: string;
}

export default function Rank({ value }: { value: number }) {
  const { type, name, subDescription, description } = RANK[value];
  const Icon = icons[type];

  const MESSAGE = `당신은 ${name}세대 입니다 ✨`;

  return (
    <section className="w-100 whitespace-break-spaces rounded-md bg-white p-2">
      <h3 className="text-lg font-bold">{MESSAGE}</h3>
      <p className="mb-4 font-bold">{`(${subDescription})`}</p>
      <p className="mb-12 font-semibold">{description}</p>
      <Icon className="m-[0_auto] h-24 w-24 " />
    </section>
  );
}
