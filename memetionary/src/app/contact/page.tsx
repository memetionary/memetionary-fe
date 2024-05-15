'use client';

import { useState } from 'react';
import Input from '@/components/Input';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import { CONTACT_OPTIONS } from '@/components/Select/constants';

interface Form {
  option: string;
  email: string;
  title: string;
  content: string;
}

const borderStyle = 'border border-solid border-gray-200 rounded-lg p-4 focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState<Form>();

  return (
    <div className="grid h-screen p-8 content-around">
      <h2 className="text-3xl font-bold">{'이메일 문의하기'}</h2>
      <div className="grid gap-y-6">
        <Select className={borderStyle} options={CONTACT_OPTIONS} value={form?.option} />
        <Input className={borderStyle} type="email" placeholder="이메일" value={form?.email} />
        <Input className={borderStyle} type="text" placeholder="제목" value={form?.title} />
        <TextArea
          className={`${borderStyle} h-52`}
          placeholder="문의 내용"
          value={form?.content}
          showTextLength={true}
        />
      </div>
      <button className="justify-self-center w-full p-6 rounded-lg bg-violet-800 text-white font-bold">
        {'문의접수'}
      </button>
    </div>
  );
}
