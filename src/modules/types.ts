export interface Summary {
  title: string
  text: string
  source?: string
  createdAt: Date;
}

export interface FlashCard {
  title: string;
  question: string;
  answer: string;
  tags?: string[]; //string arr
  createdAt: Date;
  reviewedAt?: Date; //optional args with ?
  reviewCount?: number;
}