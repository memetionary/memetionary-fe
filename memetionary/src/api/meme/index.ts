import { Meme } from '@/app/api/meme/data';
import axios from 'axios';

export const getMemeDetail = async ({ id }: { id: string }): Promise<Meme> => {
  try {
    // axios.default.baseUrl 합치기
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/meme/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getRandomMemeId = async () => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/meme/random`);
    return data;
  } catch (error) {
    throw error;
  }
};
