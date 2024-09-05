import { useToastAction } from '@/stores/toast';

const useToast = () => {
  const { addToast } = useToastAction();
  return {
    toast: {
      info: addToast('info'),
      success: addToast('success'),
      error: addToast('error'),
    },
  };
};

export default useToast;
