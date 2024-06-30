import { useCallback, useEffect, useRef, useState } from 'react';

const useTimer = (maxSeconds: number) => {
  const timerRef = useRef<number | null>(null);
  const [seconds, setSeconds] = useState<number>(maxSeconds);
  const [isTimeOver, setIsTimeOver] = useState<boolean>(false);

  const stop = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (timerRef.current !== null) return;

    timerRef.current = window.setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1;
        stop();
        setIsTimeOver(true);
        return prev;
      });
    }, 1000);
  }, [stop]);

  const reset = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setSeconds(maxSeconds);
    setIsTimeOver(false);
  }, [maxSeconds]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const reStart = useCallback(() => {
    stop();
    reset();
    start();
    setIsTimeOver(false);
  }, [reset, start, stop]);

  return { seconds, isTimeOver, start, stop, reset, reStart };
};

export default useTimer;
