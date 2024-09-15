import { StaticImageData } from 'next/image';

import QuestionImage1 from '@/assets/images/test/question_01.png';
import QuestionImage2 from '@/assets/images/test/question_02.png';
import QuestionImage3 from '@/assets/images/test/question_03.png';
import QuestionImage4 from '@/assets/images/test/question_04.png';
import QuestionImage5 from '@/assets/images/test/question_05.png';
import QuestionImage6 from '@/assets/images/test/question_06.png';
import QuestionImage7 from '@/assets/images/test/question_07.png';
import QuestionImage8 from '@/assets/images/test/question_08.png';
import QuestionImage10 from '@/assets/images/test/question_10.png';

export interface Question {
  no: number;
  question: string;
  answer: number;
  imageUrl?: string | StaticImageData;
  choices: { no: number; text: string }[];
}

export const questionList: Question[] = [
  {
    no: 1,
    question: '다음 중 빈칸에 들어갈 말로 알맞은 것은?',
    imageUrl: QuestionImage1,
    choices: [
      { no: 1, text: '게임' },
      { no: 2, text: '군싹' },
      { no: 3, text: '님선' },
      { no: 4, text: '잼얘' },
    ],
    answer: 4,
  },
  {
    no: 2,
    question: '다음 중 빈칸에 들어갈 말로 알맞은 것은?',
    imageUrl: QuestionImage2,
    choices: [
      { no: 1, text: '뭐해' },
      { no: 2, text: '미안해' },
      { no: 3, text: '고마워' },
      { no: 4, text: '사랑해' },
    ],
    answer: 2,
  },
  {
    no: 3,
    question: '다음 중 빈칸에 들어갈 말로 알맞은 것은?',
    imageUrl: QuestionImage3,
    choices: [
      { no: 1, text: '쫄면 - 영차 영차 - 뿌앵' },
      { no: 2, text: '라멘 - 으쌰 으쌰 - 뿌앵' },
      { no: 3, text: '라면 - 영차 영차 - 와앙' },
      { no: 4, text: '라멘 - 읏쇼 읏쇼 - 와앙' },
    ],
    answer: 2,
  },
  {
    no: 4,
    question: '다음 중 표정의 이름으로 알맞은 것은?',
    imageUrl: QuestionImage4,
    choices: [
      { no: 1, text: '초심각 표정' },
      { no: 2, text: '초홍홍 표정' },
      { no: 3, text: '초냉랭 표정' },
      { no: 4, text: '초진지 표정' },
    ],
    answer: 4,
  },
  {
    no: 5,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl: QuestionImage5,
    choices: [
      { no: 1, text: '블랙캣' },
      { no: 2, text: '화이트스완' },
      { no: 3, text: '블랙스완' },
      { no: 4, text: '레드캣' },
    ],
    answer: 3,
  },
  {
    no: 6,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl: QuestionImage6,
    choices: [
      { no: 1, text: '억까' },
      { no: 2, text: '긁' },
      { no: 3, text: '자중' },
      { no: 4, text: '럭키비키' },
    ],
    answer: 2,
  },
  {
    no: 7,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl: QuestionImage7,
    choices: [
      { no: 1, text: '티빙' },
      { no: 2, text: '디즈니플러스' },
      { no: 3, text: '넷플릭스' },
      { no: 4, text: '왓챠' },
    ],
    answer: 3,
  },
  {
    no: 8,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl: QuestionImage8,
    choices: [
      { no: 1, text: '팬걸, 팬보이' },
      { no: 2, text: '환걸, 환보이' },
      { no: 3, text: '휀걸, 휀보이' },
      { no: 4, text: '한걸, 한보이' },
    ],
    answer: 2,
  },
  {
    no: 9,
    question: '뉴진스 하니가 만든 밈으로, ‘갈 준비 완료’의 어순을 바꾸어 표현한 것으로 유명한 이 밈의 이름은?',
    choices: [
      { no: 1, text: '비준 갈 완료' },
      { no: 2, text: '준비 갈 완료' },
      { no: 3, text: '준갈 비 완료 ' },
      { no: 4, text: '갈비 준 완료' },
    ],
    answer: 3,
  },
  {
    no: 10,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl: QuestionImage10,
    choices: [
      { no: 1, text: '스껄' },
      { no: 2, text: '까리' },
      { no: 3, text: '쩌리' },
      { no: 4, text: '쿨' },
    ],
    answer: 3,
  },
];
