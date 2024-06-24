import axios from 'axios';

export interface GetTestInfoResponse {
  tester_count: number;
  share_count: number;
  correct_rate: number[];
  answer: number[];
}

export const getTestCount = async ({ id }: { id: number }): Promise<GetTestInfoResponse> => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/test/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

