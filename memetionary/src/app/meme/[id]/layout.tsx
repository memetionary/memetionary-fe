export default function MemeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-screen-md min-h-screen grid content-around p-8 gap-y-14 border-solid border-b-1 border-gray-200">
      {children}
    </section>
  );
}
