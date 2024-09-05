import { Portal } from '@/components/Portal';
import Toast from '@/components/Toast/Toast';
import { useToasts } from '@/stores/toast';
import { useEffect } from 'react';

const ToastProvider = () => {
  const toasts = useToasts();
  useEffect(() => {
    console.log(toasts);
  }, [toasts]);
  return (
    <Portal type="toast">
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.seq} {...toast} />
        ))}
      </div>
    </Portal>
  );
};
export default ToastProvider;
