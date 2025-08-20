import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        flashcards: 'generated-flashcards.html',
        summaries: 'get-summary.html',
        saved_flashcards: 'saved-flashcards.html',
        saved_summaries: 'saved-summaries.html'
        // Add more HTML files here if needed
      }
    }
  }
});