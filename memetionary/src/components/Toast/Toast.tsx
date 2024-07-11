import { ToastMode, useToastAction } from '@/stores/toast';
import { useEffect, useState } from 'react';

interface ToastProps {
  seq: number;
  mode: ToastMode;
  message: string;
}

const TOAST_REMOVE_DELAY = 2000;
const TOAST_ANIMATION_DELAY = 250;

const Toast = (props: ToastProps) => {
  const { removeToast } = useToastAction();
  const [opacity, setOpacity] = useState(1);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const removeTimer = setTimeout(() => {
      removeToast(props.seq);
    }, TOAST_REMOVE_DELAY);

    const animationTimer = setTimeout(() => {
      setOpacity(0);
    }, TOAST_REMOVE_DELAY - TOAST_ANIMATION_DELAY);

    return () => {
      clearTimeout(removeTimer);
      clearTimeout(animationTimer);
    };
  }, [props.seq, removeToast]);

  useEffect(() => {
    if (opacity === 1) {
      setAnimationClass('animate-fadeInUp');
    } else {
      setAnimationClass('animate-fadeOutDown');
    }
  }, [opacity]);

  return (
    <div className={`rounded bg-primary-400 text-lg text-white ${animationClass}`} style={{ opacity }}>
      <div className="flex flex-col items-center justify-center gap-1 p-2">
        <span>{props.message}</span>
      </div>
    </div>
  );
};

export default Toast;
