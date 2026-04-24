import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import type { User, Content } from '../types';

export const getUsers = async (): Promise<User[]> => {
  const usersCol = collection(db, 'users');
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as User[];
  return userList;
};

export const getContents = async (): Promise<Content[]> => {
  const contentsCol = collection(db, 'contents');
  const contentSnapshot = await getDocs(contentsCol);
  const contentList = contentSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Content[];
  return contentList;
};
