const TITLE = {
  CAPTION: '밈셔너리에서 주관하는',
  MAIN: `제 1회 밈능력테스트\n기초 영역`,
};

const Title = () => {
  return (
    <div className="px-10 pt-4">
      <p className="text-sm text-primary-700">{TITLE.CAPTION}</p>
      <h1 className="whitespace-break-spaces text-2xl font-bold text-primary-700">{TITLE.MAIN}</h1>
    </div>
  );
};

export default Title;
