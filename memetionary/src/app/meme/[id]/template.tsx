'use client';

import ToastProvider from '@/components/Toast/ToastProvider';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToastProvider />
    </>
  );
}
