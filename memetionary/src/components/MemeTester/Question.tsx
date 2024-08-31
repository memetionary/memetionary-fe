import { Question } from '@/app/api/question/data';
import { IconX, IconCircle } from '@/assets/icons';

type QuestionProps = {
  selectedAnswer: number;
} & Question;

export default function Question({ ...props }: QuestionProps) {
  const Icon = props.selectedAnswer === props.answer ? IconCircle : IconX;
  return (
    <fieldset className="flex w-full flex-col gap-5">
      <div className="flex w-full flex-col gap-2 rounded bg-white p-5 text-xl font-semibold">
        <span>{`${props.no < 9 ? 0 : ''}${props.no}.`}</span>
        <h2>{props.question}</h2>
      </div>
      {props.choices.map(({ no, text }) => {
        const isSelected = props.selectedAnswer === no;
        const isCorrect = props.answer === no;

        const colorStyle = isCorrect ? 'primary-800' : isSelected ? 'red-400' : 'gray-600';

        return (
          <div key={no} className="flex w-full cursor-pointer items-center gap-2 text-lg font-semibold">
            <input
              type="checkbox"
              key={`${props.no}-${no}`}
              id={`${no}`}
              value={no}
              name={`${props.no}`}
              checked={isSelected || isCorrect}
              className={`peer h-5 w-5 shrink-0 appearance-none rounded-full border-2 border-${colorStyle}`}
              disabled={true}
            />
            <div className={`absolute ml-1 h-3 w-3 rounded-full peer-checked:bg-${colorStyle}`} />
            <label className={`cursor-pointer peer-disabled:cursor-not-allowed text-${colorStyle}`} htmlFor={`${no}`}>
              {text}
            </label>
            {isSelected && <Icon className={`text-${colorStyle}`} width={16} height={16} />}
          </div>
        );
      })}
    </fieldset>
  );
}
