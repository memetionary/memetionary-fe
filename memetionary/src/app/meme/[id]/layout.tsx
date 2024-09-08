export default function MemeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-b-1 grid min-h-screen w-full max-w-screen-md content-around gap-y-14 border-solid border-gray-200 p-8">
      {children}
    </section>
  );
}
