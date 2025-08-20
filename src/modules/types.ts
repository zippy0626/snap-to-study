// these are like blueprints you need to follow for Objects
export interface ISummary {
  title: string;
  text: string;
  source?: string;
  createdAt: Date;

  // functions
  changeTitle(title: string): void;
  changeText(text: string): void;
}

export interface IFlashCard {
  title: string;
  front: string;
  back: string;
  tags?: string[];
  reviewedAt?: Date;
  reviewCount?: number;
  createdAt: Date;

  // functions
  flip(): void;
  changeTitle(title: string): void;
  changeFront(front: string): void;
  changeBack(back: string): void;
  addTags(...tags: string[]): void;
  removeTags(...tags: string[]): void;
  changeReviewDateToToday(): void;
  incrementReviewCount(count: number): void;
}
