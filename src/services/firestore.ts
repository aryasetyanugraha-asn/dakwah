import type { User, Content } from '../types';

const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Ustadz Ahmad',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    role: 'scholar',
    isVerified: true,
    bio: 'Pengajar ilmu tauhid dan fiqih di berbagai majelis taklim.',
    education: [
      { institution: 'Universitas Islam Madinah', degree: 'S1', year: '2010' },
    ],
    teachers: [
      { name: 'Syaikh Fulan', relation: 'Sanad Keilmuan Hadits' },
    ],
  },
  {
    id: 'u2',
    name: 'Syaikh Abdullah',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    role: 'scholar',
    isVerified: true,
    bio: 'Ahli tafsir yang telah menulis beberapa kitab rujukan.',
    education: [
      { institution: 'Al-Azhar Kairo', degree: 'S2', year: '2005' },
    ],
    teachers: [
      { name: 'Syaikh Alan', relation: 'Sanad Keilmuan Tafsir' },
    ],
  },
];

const mockContents: Content[] = [
  {
    id: 'c1',
    authorId: 'u1',
    title: 'Pentingnya Ikhlas dalam Beramal',
    body: 'Ikhlas adalah ruh dari setiap ibadah...',
    type: 'article',
    createdAt: new Date().toISOString(),
    likesCount: 150,
  },
  {
    id: 'c2',
    authorId: 'u2',
    title: 'Tafsir Surat Al-Fatihah',
    body: 'Mengenal keagungan surat pembuka dalam Al-Quran...',
    type: 'ebook',
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    likesCount: 320,
  },
  {
    id: 'c3',
    authorId: 'u1',
    title: 'Adab Menuntut Ilmu',
    body: 'Sebelum mempelajari ilmu, hendaknya seseorang memperbaiki adabnya...',
    type: 'nasehat',
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    likesCount: 89,
  },
];

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 1500); // 1.5s delay to simulate network
  });
};

export const getContents = async (): Promise<Content[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockContents);
    }, 1500);
  });
};
