import Linker from '@/components/Test/Linker';

export default function TestPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-fit w-full flex-col items-center">
      {children}
      <Linker type="preview" />
    </div>
  );
}
