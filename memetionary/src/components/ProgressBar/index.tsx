interface ProgressBarProps {
  min?: number;
  max?: number;
  current: number;
}

const DEFAULT_MIN_PERCENTAGE = 0;
const DEFAULT_MAX_PERCENTAGE = 100;

const getCurrentPercentage = (min: number, max: number, current: number) =>
  (Math.max(Math.min(current, max), min) / max) * 100;

const ProgressBar = ({ min = DEFAULT_MIN_PERCENTAGE, max = DEFAULT_MAX_PERCENTAGE, current }: ProgressBarProps) => {
  return (
    <div className="h-4 w-full overflow-hidden bg-slate-300">
      <div
        className={`h-full bg-primary-500 text-left transition-all ease-in-out`}
        style={{
          width: `${getCurrentPercentage(min, max, current)}%`,
        }}
      >
        <span></span>
      </div>
    </div>
  );
};

export default ProgressBar;
