import { create } from 'zustand';

export const TOAST_MODE = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export type ToastMode = (typeof TOAST_MODE)[keyof typeof TOAST_MODE];

export interface Toast {
  seq: number;
  mode: ToastMode;
  message: string;
}

interface ToastStoreState {
  toasts: Toast[];
}

interface ToastStoreAction {
  addToast: (mode: ToastMode) => (message: string) => void;
  removeToast: (seq: number) => void;
  clear: () => void;
}

interface ToastStore extends ToastStoreState {
  actions: ToastStoreAction;
}

const TOAST_STORE_INIT_DATA: ToastStoreState = {
  toasts: [],
};

const useToastStore = create<ToastStore>((set) => ({
  ...TOAST_STORE_INIT_DATA,
  actions: {
    addToast: (mode: ToastMode) => (message: string) => {
      set(({ toasts }) => ({ toasts: [...toasts, { mode, message, seq: toasts.length + 1 }] }));
    },
    removeToast: (seq) => {
      set((state) => {
        if (state.toasts.length === 0) return state;
        return { toasts: state.toasts.filter(({ seq: valueSeq }) => valueSeq !== seq) };
      });
    },
    clear: () => {
      set(() => ({ toasts: TOAST_STORE_INIT_DATA.toasts }));
    },
  },
}));

export const useToastAction = () => useToastStore(({ actions }) => actions);
export const useToasts = () => useToastStore(({ toasts }) => toasts);
