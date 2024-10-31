import axios from 'axios';
import { ContactForm } from '@/app/contact/page';

export const contactMail = async ({ form }: { form: ContactForm }) => {
  try {
    // axios.default.baseUrl 합치기
    await axios.post(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api/contact`, form);
  } catch (error) {
    throw error;
  }
};
