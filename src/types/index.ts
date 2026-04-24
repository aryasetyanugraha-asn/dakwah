export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Teacher {
  name: string;
  relation: string; // e.g., 'sanad keilmuan'
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'admin' | 'scholar' | 'reader';
  isVerified: boolean;
  bio: string;
  education: Education[];
  teachers: Teacher[];
}

export interface Content {
  id: string;
  authorId: string;
  title: string;
  body: string;
  type: 'article' | 'ebook' | 'nasehat';
  createdAt: string; // ISO date string
  likesCount: number;
}
