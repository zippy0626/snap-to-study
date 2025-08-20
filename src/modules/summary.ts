import type { Summary } from "./types.ts";

export class SummaryCardModel {
  static create(title: string, text: string, source?: string): Summary { //create with interface Summary
      return {
        title, text, source, createdAt: new Date()
      }
    }
}