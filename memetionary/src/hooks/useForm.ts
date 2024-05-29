import { useState } from 'react';

export const useForm = <T>(initForm: T) => {
  const [form, setForm] = useState<typeof initForm>(initForm);

  const handleChangeForm = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    setForm((prev: typeof initForm) => ({ ...prev, [target.id]: target.value }));
  };

  return {
    form,
    setForm,
    handleChangeForm,
  };
};
