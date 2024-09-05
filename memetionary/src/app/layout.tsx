import type { Metadata } from 'next';
import '@/styles/globals.css';
import BodyLayout from '@/components/Layout';
import KakaoScript from '@/components/KaKaoScript';

export const metadata: Metadata = {
  title: 'Memetionary',
  description: 'The latest meme trend dictionary',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <BodyLayout>{children}</BodyLayout>
      <KakaoScript />
    </html>
  );
}
