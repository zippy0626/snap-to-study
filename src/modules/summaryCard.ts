import type { ISummary } from "./types.ts";

export class SummaryCard implements ISummary {
  // these are type declarations for FlashCard class
  // they just tell you what the data needs to be
  title: string;
  text: string;
  source?: string | undefined;
  createdAt: Date;

  constructor(title: string, text: string, source?: string) {
    this.title = title;
    this.text = text;
    this.source = source;
    this.createdAt = new Date();
  }

  changeText(text: string): void {
    this.text = text;
  }

  changeTitle(title: string): void {
    this.title = title;
  }
}
