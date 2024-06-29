'use client';

import { Question } from '@/app/api/question/data';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import Submitter from '@/components/Test/Submitter';
import useTimer from '@/hooks/useTimer';
import { useCallback, useEffect, useRef, useState } from 'react';

interface MemeTesterProps {
  testId: number;
  questionList: Question[];
}

const TITLE = {
  MAIN: '제 1회 밈능력테스트',
  CAPTION: '기초 영역',
};

const TIMER_MAX_SECONDS = 2;
const NO_SELECT_ANSWER = 0;

const MemeTester = ({ testId, questionList }: MemeTesterProps) => {
  const [questionNo, setQuestionNo] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(NO_SELECT_ANSWER);
  const [isTestDone, setIsTestDone] = useState<boolean>(false);
  const { seconds, isTimeOver, reStart: startTimer } = useTimer(TIMER_MAX_SECONDS);

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  const nextToQuestion = useCallback(() => {
    if (selectedAnswer === NO_SELECT_ANSWER) {
      setUserAnswers((userAnswers) => [...userAnswers, NO_SELECT_ANSWER]);
    }

    setSelectedAnswer(NO_SELECT_ANSWER);

    const isLastQuestion = questionNo === questionList.length - 1;

    if (!isLastQuestion) {
      setQuestionNo((prevNo) => prevNo + 1);
      startTimer();
    }
  }, [questionList.length, questionNo, selectedAnswer, startTimer]);

  const handleChangeSelect = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(+target.value);
  };

  useEffect(() => {
    if (selectedAnswer === NO_SELECT_ANSWER) return;
    setUserAnswers((userAnswers) => {
      const newUserAnswers = [...userAnswers];
      newUserAnswers[questionNo] = selectedAnswer;
      return newUserAnswers;
    });
  }, [questionNo, selectedAnswer]);

  useEffect(() => {
    if (isTimeOver) {
      nextToQuestion();
    }
  }, [isTimeOver, nextToQuestion]);

  useEffect(() => {
    const isLastQuestion = questionNo === questionList.length - 1;
    const isAllCheck = questionList.length === userAnswers.length;

    console.log(userAnswers);

    if (isLastQuestion && isAllCheck) {
      setIsTestDone(true);
    }
  }, [questionList.length, questionNo, userAnswers.length, userAnswers]);

  return (
    <div className="flex w-[30rem] select-none flex-col items-center gap-5 bg-primary-50">
      <ProgressBar min={0} max={questionList.length} current={questionNo + 1} />
      <div className="flex h-fit w-4/5 items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-800">{TITLE.MAIN}</h1>
          <span className="text-2xl text-primary-800">{TITLE.CAPTION}</span>
        </div>
        <div
          className={`flex h-24 w-24 items-center justify-center rounded-full bg-primary-900 text-3xl font-bold ${seconds > 10 ? 'text-white' : 'text-red-400'}`}
        >
          {seconds}
        </div>{' '}
      </div>
      <div className="flex w-4/5 flex-col gap-5 pb-10">
        <fieldset className="flex w-full flex-col gap-5">
          <div className="flex w-full flex-col gap-2 rounded bg-white p-5 text-2xl font-semibold">
            <span>{`${questionNo < 9 ? 0 : ''}${questionNo + 1}.`}</span>
            <h2>{questionList[questionNo]?.question}</h2>
          </div>
          {questionList[questionNo]?.choices.map(({ no, text }) => (
            <div key={no} className="flex w-full cursor-pointer items-center gap-2 text-xl font-semibold">
              <input
                type="radio"
                id={`${no}`}
                value={no}
                name="question"
                onChange={handleChangeSelect}
                checked={selectedAnswer === no}
                className="peer h-5 w-5 shrink-0 appearance-none rounded-full border-2 border-primary-800 disabled:border-gray-600"
                disabled={isTimeOver}
              />
              <div className="absolute ml-1 h-3 w-3 rounded-full peer-checked:bg-primary-800  peer-checked:peer-disabled:bg-gray-600" />
              <label
                className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:text-gray-600"
                htmlFor={`${no}`}
              >
                {text}
              </label>
            </div>
          ))}
        </fieldset>
        {isTestDone ? (
          <Submitter id={testId} answer={userAnswers} />
        ) : (
          <Button
            type="submit"
            className="text-xl font-semibold"
            size="full"
            disabled={selectedAnswer === NO_SELECT_ANSWER}
            onClick={nextToQuestion}
          >
            다음 문제로
          </Button>
        )}
      </div>
    </div>
  );
};

export default MemeTester;
