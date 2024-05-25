import axios from 'axios';
import { ContactForm } from '@/app/contact/page';

export const contactMail = async ({ form }: { form: ContactForm }) => {
  try {
    // axios.default.baseUrl 합치기
    await axios.post(`${process.env.NEXT_PUBLIC_URL}/contact`, form);
  } catch (error) {
    throw error;
  }
};
