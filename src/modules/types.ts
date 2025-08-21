// these are like blueprints you need to follow for Objects
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
