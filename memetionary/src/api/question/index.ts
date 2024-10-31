import { Question } from '@/app/api/question/data';
import axios from 'axios';

interface GetQuestionResponse {
  data: Question[];
}

export const getQuestionList = async (): Promise<GetQuestionResponse> => {
  try {
    const { data } = await axios.get(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api/question`);
    return data;
  } catch (error) {
    throw error;
  }
};
