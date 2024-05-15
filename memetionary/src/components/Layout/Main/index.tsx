const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="flex h-fit min-w-80 max-w-192 flex-col items-center justify-center">{children}</main>;
};

export default Main;
