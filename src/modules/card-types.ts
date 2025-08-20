export interface Summary {
  title: string
  text: string
  source?: string
  createdAt: Date;
}

export interface Flashcard {
  title: string;
  question: string;
  answer: string;
  tags?: string[]; //string arr
  createdAt: Date;
  reviewedAt?: Date;
  reviewCount?: number;
}