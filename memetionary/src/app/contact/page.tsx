'use client';

import { ChangeEvent, MouseEventHandler, useState } from 'react';
import Input from '@/components/Input';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import { CONTACT_OPTIONS } from '@/components/Select/constants';
import { contactMail } from '@/api/contact';
import { validateContactForm } from '@/utils/validator/contactForm';

export interface ContactForm {
  option: string;
  email: string;
  title: string;
  content: string;
}

const INIT_FORM: ContactForm = {
  option: '',
  email: '',
  title: '',
  content: '',
};

const borderStyle = 'border border-solid border-gray-200 rounded-lg p-4 focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(INIT_FORM);

  const handleChangeForm = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    setForm((prev) => ({ ...prev, [target.id]: target.value }));
  };

  const handleClickSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const inValid = validateContactForm(form);
    if (inValid) {
      alert(inValid);
      return;
    }
    await contactMail({ form });
    const SUCCESS_SUBMIT_MSG = '성공적으로 문의가 접수되었습니다.';
    alert(SUCCESS_SUBMIT_MSG);
    setForm(INIT_FORM);
  };

  return (
    <>
      <div className="grid gap-y-6">
        <Select
          id="option"
          className={borderStyle}
          options={CONTACT_OPTIONS}
          value={form?.option}
          onChange={handleChangeForm}
        />
        <Input
          id="email"
          className={borderStyle}
          type="email"
          placeholder="이메일"
          value={form?.email}
          onChange={handleChangeForm}
        />
        <Input
          id="title"
          className={borderStyle}
          type="text"
          placeholder="제목"
          value={form?.title}
          onChange={handleChangeForm}
        />
        <TextArea
          id="content"
          className={`${borderStyle} h-52`}
          placeholder="문의 내용 (10자 이상 입력해주세요.)"
          value={form?.content}
          showTextLength={true}
          onChange={handleChangeForm}
        />
      </div>
      <button
        type="submit"
        className="w-full justify-self-center rounded-lg bg-primary-700  p-6 font-bold text-white disabled:bg-primary-100"
        onClick={handleClickSubmit}
      >
        {'문의접수'}
      </button>
    </>
  );
}
