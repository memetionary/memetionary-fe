import Header from '@/components/Layout/Header';
import Main from '@/components/Layout/Main';
import RootProvider from '@/components/RootProvider';

const BodyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <body className="flex min-h-screen flex-col items-center">
      <Header />
      <Main>{children}</Main>
      <RootProvider />
    </body>
  );
};

export default BodyLayout;
