import type { IFlashCard } from "./types.ts";

export class FlashCard implements IFlashCard {
  // these are type declarations for FlashCard class
  // they just tell you what the data needs to be
  title: string;
  front: string;
  back: string;
  tags?: string[] | undefined;
  reviewedAt?: Date | undefined;
  reviewCount?: number | undefined;
  createdAt: Date;

  // this is used to init the object
  constructor(title: string, front: string, back: string, tags?: string[]) {
    this.title = title;
    this.front = front;
    this.back = back;
    this.tags = tags ?? [];
    this.createdAt = new Date();
  }

  // syntax - methodName(params): returnType
  flip(): void {
    [this.front, this.back] = [this.back, this.front];
  }

  changeTitle(title: string): void {
    this.title = title;
  }

  changeFront(front: string): void {
    this.front = front;
  }

  changeBack(back: string): void {
    this.back = back;
  }

  addTags(...tags: string[]): void {
    for (const tag of tags) {
      this.tags?.push(tag);
    }
  }

  removeTags(...tags: string[]): void {
    for (const tag of tags) {
      let i = this.tags?.indexOf(tag);
      if (i !== undefined && i > -1) {
        this.tags?.splice(i, 1);
      }
    }
  }

  changeReviewDateToToday(): void {
    this.reviewedAt = new Date();
  }

  incrementReviewCount(count: number) {
    this.reviewCount = (this.reviewCount ?? 0) + count;
  }
}
