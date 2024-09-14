import { type Question } from '@/app/api/question/data';
import { IconX, IconCircle } from '@/assets/icons';

type QuestionProps = {
  selectedAnswer: number;
} & Question;

export default function Question({ ...props }: QuestionProps) {
  const isCorrect = props.selectedAnswer === props.answer;
  const Icon = isCorrect ? IconCircle : IconX;

  return (
    <fieldset className="flex w-full flex-col gap-5">
      <div className="flex w-full flex-col gap-2 rounded bg-white p-5 text-xl font-semibold">
        <span>{`${props.no < 9 ? 0 : ''}${props.no}.`}</span>
        <h2>{props.question}</h2>
      </div>
      {props.choices.map(({ no, text }) => {
        const isSelected = props.selectedAnswer === no;
        const isAnswer = props.answer === no;

        return (
          <div
            key={no}
            className={`flex w-full cursor-pointer items-center gap-2 text-lg font-semibold ${isAnswer ? 'text-primary-800' : isSelected ? 'text-red-400' : 'text-gray-800'}`}
          >
            <input
              type="checkbox"
              key={`${props.no}-${no}`}
              id={`${no}`}
              value={no}
              name={`${props.no}`}
              checked={isSelected || isAnswer}
              className={`peer h-5 w-5 shrink-0 appearance-none rounded-full border-2 ${isAnswer ? 'border-primary-800' : isSelected ? 'border-red-400' : 'border-gray-800'}`}
              disabled={true}
            />
            <div
              className={`absolute ml-1 h-3 w-3 rounded-full ${isAnswer ? 'peer-checked:bg-primary-800' : 'peer-checked:bg-red-400'}`}
            />
            <label className={`cursor-pointer peer-disabled:cursor-not-allowed`} htmlFor={`${no}`}>
              {text}
            </label>
            {isSelected && <Icon width={16} height={16} />}
          </div>
        );
      })}
    </fieldset>
  );
}
