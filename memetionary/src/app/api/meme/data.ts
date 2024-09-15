import { tagStyle } from '@/components/Meme/TagList/Tag';

export const memeList: Meme[] = [
  {
    id: 1,
    title: '어쩔 티비',
    lastUpdate: new Date(),
    view: 12345,
    evaluation: {
      good: {
        count: 1222,
        isEnabled: true,
      },
      bad: {
        count: 133,
        isEnabled: false,
      },
    },
    description: '어쩌라고의 뜻으로, 어쩔 + 가전제품을 붙여 사용한다.',
    exampleType: 'conversation',
    example: `오늘 뭐해?/n어쩔티비/n헐 저쩔티비/n어쩔전자레인지`,
    // tags: [
    //   { type: 'info', value: '한국' },
    //   { type: 'info', value: '게임' },
    //   { type: 'info', value: '웹툰' },
    //   { type: 'info', value: '애니' },
    //   { type: 'info', value: '커뮤니티' },
    //   { type: 'info', value: '유튜브' },
    //   { type: 'danger', value: '주의' },
    // ],
  },
  {
    id: 2,
    title: '어쩔 티비',
    lastUpdate: new Date(),
    view: 12345,
    evaluation: {
      good: {
        count: 1222,
        isEnabled: true,
      },
      bad: {
        count: 133,
        isEnabled: false,
      },
    },
    description: '어쩌라고의 뜻으로, 어쩔 + 가전제품을 붙여 사용한다.',
    exampleType: 'ping',
    example: `오늘 뭐해? 어쩔티비 헐 저쩔티비 어쩔전자레인지`,
    // tags: [
    //   { type: 'info', value: '한국' },
    //   { type: 'info', value: '게임' },
    //   { type: 'info', value: '웹툰' },
    //   { type: 'info', value: '애니' },
    //   { type: 'info', value: '커뮤니티' },
    //   { type: 'info', value: '유튜브' },
    //   { type: 'danger', value: '주의' },
    // ],
  },
  {
    id: 3,
    title: '어쩔 티비',
    lastUpdate: new Date(),
    view: 12345,
    evaluation: {
      good: {
        count: 1222,
        isEnabled: true,
      },
      bad: {
        count: 133,
        isEnabled: false,
      },
    },
    description: '어쩌라고의 뜻으로, 어쩔 + 가전제품을 붙여 사용한다.',
    exampleType: 'ping',
    example: `이렇게 너무 귀여우면 나보고 어떡하라고, 어떡콰라고, 어뜨카라고, 억떡하라고, 우뜨카라고, 모루카라고, 오픈카라고, 엉뜨켜라고, 엉뚱하라고, 오또카라고, 어띃하라고, 어떡콰라고, 어뜨카라고, 억떡하라고, 우뜨카라고, 모루카라고, 오픈카라고, 엉뜨켜라고, 오또카라고`,
    // tags: [
    //   { type: 'info', value: '한국' },
    //   { type: 'info', value: '게임' },
    //   { type: 'info', value: '웹툰' },
    //   { type: 'info', value: '애니' },
    //   { type: 'info', value: '커뮤니티' },
    //   { type: 'info', value: '유튜브' },
    //   { type: 'danger', value: '주의' },
    // ],
  },
];

export const trendMemeList: Meme[] = memeList;

export interface Meme {
  id: number;
  title: string;
  lastUpdate: Date;
  view: number;
  evaluation: Evaluation;
  description: string;
  image?: string;
  example: string;
  exampleType: 'conversation' | 'ping';
  tags?: Tag[];
}

export type EvaluationType = 'good' | 'bad';

export type Evaluation = {
  [key in 'good' | 'bad']: {
    count: number;
    isEnabled: boolean;
  };
};

export interface Tag {
  name: string;
  color: keyof typeof tagStyle;
}
