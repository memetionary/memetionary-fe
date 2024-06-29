export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid max-h-fit min-h-full w-fit grid-rows-[max-content] gap-4 bg-primary-50 text-center">
      {children}
    </div>
  );
}
