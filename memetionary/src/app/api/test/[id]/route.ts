import { NextResponse } from 'next/server';
import { fireStore } from '../../../../../firebase/firebasedb';
import { getDoc, doc, updateDoc } from 'firebase/firestore';

export const GET = async (request: Request, { params }: { params: { id: number } }) => {
  const docRef = doc(fireStore, `test/${params.id}`);
  const res = await getDoc(docRef);

  if (res.exists()) {
    const data = res.data();
    return NextResponse.json(data);
  }

  return NextResponse.json({ status: 500 });
};

