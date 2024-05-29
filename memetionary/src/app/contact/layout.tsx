export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const title = '이메일 문의하기';
  return (
    <form className="grid h-full w-full content-around p-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      {children}
    </form>
  );
}
