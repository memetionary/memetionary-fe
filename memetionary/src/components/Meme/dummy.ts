import { ArticleProps } from './Article';
import { EvaluationProps } from './Evaluation';
import { ExampleProps } from './Example';
import { TagListProps } from './TagList';

export const evaluation: EvaluationProps = {
  good: {
    count: 1222,
    isGood: true,
  },
  bad: {
    count: 133,
    isBad: false,
  },
};

export const example: ExampleProps[] = [
  { id: 1, name: 'me', content: '오늘 뭐해?' },
  { id: 2, name: 'you', content: '어쩔티비' },
  { id: 3, name: 'me', content: '헐 저쩔티비' },
  { id: 4, name: 'you', content: '어쩔전자레인지' },
];

export const articles: ArticleProps[] = [
  {
    title: '어쩔티비란?',
    content: `"어쩔 수 없는 티비"의 줄임말로, 한국어에서는 일상적으로 사용되는 용어입니다. "어쩔 수 없는"은 어떤 상황이나 사건에 대해 아무것도 할 수 없다는 뜻이며, 여기에 "티비"를 붙여서 특정한 방송이나 프로그램을 가리키는 말로 사용됩니다. 그러니까, "어쩔 티비"라는 말은 일종의 불만이나 어쩔 수 없는 상황을 의미하는 표현입니다.`,
  },
  {
    title: '어쩔티비의 어원',
    content: `"어쩔 티비"의 어원은 한국어에서 일상적으로 사용되는 관용구에서 나왔습니다. "어쩔"은 "어쩔 수 없는"의 준말이고, "티비"는 "텔레비전"을 줄인 말입니다. 따라서 "어쩔 티비"는 "어쩔 수 없는 텔레비전"을 의미합니다. 이 표현은 특히 어떤 프로그램이나 방송이 불만스럽거나 좋지 않을 때 사용되며, 그것을 바꿀 수 없다는 의미를 담고 있습니다.`,
  },
];

export const tags: TagListProps[] = [
  { type: 'info', value: '한국' },
  { type: 'info', value: '게임' },
  { type: 'info', value: '웹툰' },
  { type: 'info', value: '애니' },
  { type: 'info', value: '커뮤니티' },
  { type: 'info', value: '유튜브' },
  { type: 'danger', value: '주의' },
];
