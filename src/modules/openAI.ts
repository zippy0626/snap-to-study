import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const client = new OpenAI();

const Flashcard = z.object({
    title: z.string(),
    front: z.string(),
    back: z.string(),
    tags: z.array(z.string()).optional(),
    reviewedAt: z.date().optional(),
    reviewCount: z.number().optional(),
    createdAt: z.date()
});

export async function makeFlashcards(ocrText: string, numOfCards: number)
{
    const response = await client.responses.parse({
        model: "gpt-4o-mini",
        input: [
            { role: "system", content: `Generate exactly ${numOfCards} flashcards in JSON format from the text.` },
            { role: "user", content: ocrText },
        ],
        text: {
            format: zodTextFormat(z.array(Flashcard), "flashcards"),
        },
    });

    return response.output_parsed;
}