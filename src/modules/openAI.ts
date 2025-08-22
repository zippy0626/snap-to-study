import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";
import { FlashCard } from "./flashCard.ts";

export async function makeFlashcards(ocrText: string, numOfCards: number, apiKey: string): Promise<FlashCard[]> {
  const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

  // array of flash card objects
  const FlashCardSchema = z.object({
    flashcards: z.array(
      z.object({
        title: z.string(),
        front: z.string(),
        back: z.string(),
      })
    )
  });

  const response = await openai.responses.parse({
    model: "gpt-4o-mini",
    input: [
      {
        role: "system", content: `Generate exactly ${numOfCards} flashcards in a JSON array format.
Each flashcard should have fields: title, front, back` },
      { role: "user", content: ocrText },
    ],
    text: {
      format: zodTextFormat(FlashCardSchema, "flashcards"),
    },
  });

  const rawCards = response.output_parsed?.flashcards ?? []

  // need to convert plain objects to FlashCard instances
  return rawCards.map(cardData => {
    const flashCard = new FlashCard(
      cardData.title,
      cardData.front,
      cardData.back,
    );
    return flashCard;
  });
}