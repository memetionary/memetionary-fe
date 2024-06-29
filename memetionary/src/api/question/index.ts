import { Question } from '@/app/api/question/data';
import axios from 'axios';

interface GetQuestionResponse {
  data: Question[];
}

export const getQuestionList = async (): Promise<GetQuestionResponse> => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/question`);
    return data;
  } catch (error) {
    throw error;
  }
};
