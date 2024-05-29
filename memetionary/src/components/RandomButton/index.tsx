'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { getRandomMemeId } from '@/api/meme';
import { IconRandom } from '@/assets/icons';

interface RandomButtonProps {
  type: 'icon' | 'text';
}

export default function RandomButtom({ ...props }: RandomButtonProps) {
  const router = useRouter();

  const randomMeme = async () => {
    const id = await getRandomMemeId();
    router.push(`/meme/${id}`);
  };

  return props.type === 'icon' ? (
    <IconRandom className="cursor-pointer" width={16} height={16} onClick={randomMeme} />
  ) : (
    <Button size="full" variant="outlined" onClick={randomMeme}>
      랜덤 밈 보기
    </Button>
  );
}
