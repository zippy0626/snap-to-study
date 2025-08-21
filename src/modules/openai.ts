import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const client = new OpenAI();

// use flashcard.ts 
// const Flashcard = z.object({
//     name: z.string(),
//     question: z.string(),
//     answer: z.string()
// });

export async function makeFlashcards(ocrText: string)
{
    const response = await client.responses.parse({
        model: "gpt-4o-mini",
        input: [
            { role: "system", content: "Generate flashcards in JSON format from the text." },
            { role: "user", content: ocrText },
        ],
        text: {
            format: zodTextFormat(z.array(Flashcard), "flashcards"),
        },
    });

    return response.output_parsed;
}

export async function makeSummary(ocrText: string)
{
    const response = await client.chat.completions.create({
        model: "chatgpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant that generates concise summaries." },
            { role: "user", content: ocrText },
        ],
    });

    return response.choices[0].message?.content || "";
}