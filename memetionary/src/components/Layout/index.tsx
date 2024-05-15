import Header from '@/components/Layout/Header';
import Main from '@/components/Layout/Main';

const BodyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <body className="flex min-h-screen flex-col items-center">
      <Header />
      <Main>{children}</Main>
    </body>
  );
};

export default BodyLayout;
