export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid max-h-fit min-h-full w-fit grid-rows-[max-content] gap-4 bg-primary-50 text-center">
      <div className="absolute top-[43%] h-16 w-16 animate-spin rounded-full border-t-2 border-primary-800" />
    </div>
  );
}
