import { NextResponse } from 'next/server';
import { fireStore } from '../../../../../../firebase/firebasedb';
import { getDoc, doc, updateDoc } from 'firebase/firestore';

export const POST = async (_: Request, { params }: { params: { id: number } }) => {
  const docRef = doc(fireStore, `test/${params.id}`);
  const res = await getDoc(docRef);

  if (res.exists()) {
    const data = res.data();
    const { share_count } = data;

    const newShareCount = share_count + 1;

    const newData = {
      ...data,
      share_count: newShareCount,
    };

    updateDoc(docRef, newData);
  }

  return NextResponse.json({ status: 500 });
};
