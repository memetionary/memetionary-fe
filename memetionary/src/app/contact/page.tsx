'use client';

import { MouseEventHandler } from 'react';
import { useForm } from '@/hooks/useForm';
import Input from '@/components/Input';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import { CONTACT_OPTIONS } from '@/components/Select/constants';
import { contactMail } from '@/api/contact';
import Z, { validateForm } from '@/utils/validator';

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

const SUCCESS_SUBMIT_MSG = '성공적으로 문의가 접수되었습니다.';
const MAX_TEXT_LENGTH = 500;
const MIN_CONTENT_NUM = 10;

const ContactForm = Z.object({
  option: new Z().string().min({ num: 1, message: '문의 유형을 선택해주세요.' }),
  email: new Z().string().email({ message: '올바른 이메일 형식을 입력해주세요.' }),
  title: new Z().string().min({ num: 1, message: '제목을 입력해주세요.' }),
  content: new Z()
    .string()
    .min({ num: MIN_CONTENT_NUM, message: `문의 내용을 최소 ${MIN_CONTENT_NUM}자 이상 입력해주세요` }),
});

export default function Contact() {
  const { form, setForm, handleChangeForm } = useForm<ContactForm>(INIT_FORM);
  const borderStyle = 'border border-solid border-gray-200 rounded-lg p-4 focus:outline-none';

  const handleClickSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (validateForm(ContactForm, form)) {
      await contactMail({ form });
      alert(SUCCESS_SUBMIT_MSG);
      setForm(INIT_FORM);
    }
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
          className={borderStyle}
          placeholder="문의 내용 (10자 이상 입력해주세요.)"
          value={form?.content}
          showTextLength={true}
          maxLength={MAX_TEXT_LENGTH}
          onChange={handleChangeForm}
        />
      </div>
      <Button size="full" variant="outlined" className="p-6" onClick={handleClickSubmit}>
        {'문의접수'}
      </Button>
    </>
  );
}
