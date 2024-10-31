import axios from 'axios';

export interface GetTestInfoResponse {
  tester_count: number;
  share_count: number;
  correct_rate: number[];
  rank: number[];
  answer: number[];
}

export const getTestCount = async ({ id }: { id: number }): Promise<GetTestInfoResponse> => {
  try {
    const { data } = await axios.get(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api/test/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

interface PostTestResponese {
  rank: number;
  correct_rate: number[];
}

export const postTest = async ({ id, answer }: { id: number; answer: number[] }): Promise<PostTestResponese> => {
  try {
    const { data } = await axios.post(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api/test/${id}`, {
      answer,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const postShareCount = async ({ id }: { id: number }) => {
  try {
    const { data } = await axios.post(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api/test/share/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
