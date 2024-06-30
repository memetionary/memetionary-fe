export interface Question {
  no: number;
  question: string;
  answer: number;
  imageUrl?: string;
  choices: { no: number; text: string }[];
}

export const questionList: Question[] = [
  {
    no: 1,
    question: '다음 중 화가 났을 때 사용하는 밈이 아닌 것은?',
    choices: [
      { no: 1, text: 'kg받네' },
      { no: 2, text: '군싹' },
      { no: 3, text: '킹받드라슈' },
      { no: 4, text: '쫑받네' },
    ],
    answer: 2,
  },
  {
    no: 2,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl:
      'https://i.namu.wiki/i/HpdgUBxXi3XgSJ-t3unn-1pS7Inc0hJvio0c82ZXmbZ7wyZNB2ltWBvpGPpA7C7-fy0UbUWAaXZ2C5nxgtY4SA.webp',
    choices: [
      { no: 1, text: '강아지' },
      { no: 2, text: '고슴도치' },
      { no: 3, text: '고양이' },
      { no: 4, text: '귀뚜라미' },
    ],
    answer: 3,
  },
  {
    no: 3,
    question: '다음 중 화가 났을 때 사용하는 밈이 아닌 것은?',
    choices: [
      { no: 1, text: 'kg받네' },
      { no: 2, text: '군싹' },
      { no: 3, text: '킹받드라슈' },
      { no: 4, text: '쫑받네' },
    ],
    answer: 2,
  },
  {
    no: 4,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl:
      'https://i.namu.wiki/i/HpdgUBxXi3XgSJ-t3unn-1pS7Inc0hJvio0c82ZXmbZ7wyZNB2ltWBvpGPpA7C7-fy0UbUWAaXZ2C5nxgtY4SA.webp',
    choices: [
      { no: 1, text: '강아지' },
      { no: 2, text: '고슴도치' },
      { no: 3, text: '고양이' },
      { no: 4, text: '귀뚜라미' },
    ],
    answer: 3,
  },
  {
    no: 5,
    question: '다음 중 화가 났을 때 사용하는 밈이 아닌 것은?',
    choices: [
      { no: 1, text: 'kg받네' },
      { no: 2, text: '군싹' },
      { no: 3, text: '킹받드라슈' },
      { no: 4, text: '쫑받네' },
    ],
    answer: 2,
  },
  {
    no: 6,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl:
      'https://i.namu.wiki/i/HpdgUBxXi3XgSJ-t3unn-1pS7Inc0hJvio0c82ZXmbZ7wyZNB2ltWBvpGPpA7C7-fy0UbUWAaXZ2C5nxgtY4SA.webp',
    choices: [
      { no: 1, text: '강아지' },
      { no: 2, text: '고슴도치' },
      { no: 3, text: '고양이' },
      { no: 4, text: '귀뚜라미' },
    ],
    answer: 3,
  },
  {
    no: 7,
    question: '다음 중 화가 났을 때 사용하는 밈이 아닌 것은?',
    choices: [
      { no: 1, text: 'kg받네' },
      { no: 2, text: '군싹' },
      { no: 3, text: '킹받드라슈' },
      { no: 4, text: '쫑받네' },
    ],
    answer: 2,
  },
  {
    no: 8,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl:
      'https://i.namu.wiki/i/HpdgUBxXi3XgSJ-t3unn-1pS7Inc0hJvio0c82ZXmbZ7wyZNB2ltWBvpGPpA7C7-fy0UbUWAaXZ2C5nxgtY4SA.webp',
    choices: [
      { no: 1, text: '강아지' },
      { no: 2, text: '고슴도치' },
      { no: 3, text: '고양이' },
      { no: 4, text: '귀뚜라미' },
    ],
    answer: 3,
  },
  {
    no: 9,
    question: '다음 중 화가 났을 때 사용하는 밈이 아닌 것은?',
    choices: [
      { no: 1, text: 'kg받네' },
      { no: 2, text: '군싹' },
      { no: 3, text: '킹받드라슈' },
      { no: 4, text: '쫑받네' },
    ],
    answer: 2,
  },
  {
    no: 10,
    question: '다음 빈칸에 들어갈 단어로 알맞은 것은?',
    imageUrl:
      'https://i.namu.wiki/i/HpdgUBxXi3XgSJ-t3unn-1pS7Inc0hJvio0c82ZXmbZ7wyZNB2ltWBvpGPpA7C7-fy0UbUWAaXZ2C5nxgtY4SA.webp',
    choices: [
      { no: 1, text: '강아지' },
      { no: 2, text: '고슴도치' },
      { no: 3, text: '고양이' },
      { no: 4, text: '귀뚜라미' },
    ],
    answer: 3,
  },
];
