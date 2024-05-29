const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="grid w-full min-w-80 max-w-192 flex-grow justify-items-center">{children}</main>;
};

export default Main;
