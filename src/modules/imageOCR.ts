import Tesseract from 'tesseract.js';

// Function to perform OCR on an uploaded image
export async function extractTextFromImage(imageFile: File): Promise<string> {
    const { data: { text } } = await Tesseract.recognize(imageFile, 'eng');
    return text;
}

// Example flashcard generator (stub for AI integration)
export function generateFlashcardsFromText(text: string): Array<{ question: string, answer: string }> {
    // Simple split by lines, placeholder logic
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    return lines.map((line, idx) => ({
        question: `Q${idx + 1}: What is mentioned in this line?`, // This is a placeholder for a more sophisticated AI or a more advanced logic to generate questions.
        answer: line
    }));
}

// Save flashcards locally (using localStorage)
export function saveFlashcardsLocally(flashcards: Array<{ question: string, answer: string }>) {
    localStorage.setItem('snap2study_flashcards', JSON.stringify(flashcards));
}

// Load flashcards from localStorage
export function loadFlashcardsLocally(): Array<{ question: string, answer: string }> {
    const data = localStorage.getItem('snap2study_flashcards');
    return data ? JSON.parse(data) : [];
}