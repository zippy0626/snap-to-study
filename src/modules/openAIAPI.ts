import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

const response = await client.responses.create({
    model: "gpt-4o",
    instructions: "You are a helpful assistant that translates English to French.",
    input: "Translate the following English text to French: 'Hello, how are you?'",
});

console.log(response.output_text);