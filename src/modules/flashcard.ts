import type { FlashCard } from './types.ts';

export class FlashCardModel {
  static create(title: string, question: string, answer: string, tags?: string[]): FlashCard { //create with interface FlashCard
    return {
      title, question, answer, tags, createdAt: new Date()
    }
  }

  static review(flashCard: FlashCard): FlashCard {
    return {
      ...flashCard, //copy all exising properties
      reviewedAt: new Date(),
      reviewCount: (flashCard.reviewCount || 0) + 1
    }
  }
}