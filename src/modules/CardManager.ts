import { FlashCard } from "./flashCard.ts";

const CardManager = {
  initStorage(): void {
    localStorage.getItem("user-notes") ?? localStorage.setItem("user-notes", JSON.stringify([]));
  },

  createCard(params: { title: string; front: string; back: string; tags?: string[] }): FlashCard {
    const card = new FlashCard(params.title, params.front, params.back, params.tags);
    const allCards = this.getAllCards();
    allCards.push(card);
    localStorage.setItem("user-notes", JSON.stringify(allCards));
    return card;
  },

  getAllCards(): FlashCard[] {
    let stored = localStorage.getItem("user-notes");
    if (!stored) return [];

    const objects = JSON.parse(stored);

    // need to reinit flashcard objects
    const allCards = objects.map((obj: any) => new FlashCard(obj.title, obj.front, obj.back, obj.tags));

    return allCards;
  },

  getCard(title: string): FlashCard | undefined {
    const allCards = this.getAllCards();
    return allCards.find((card: FlashCard) => card.title === title);
  },

  updateCard(params: FlashCard): void {
    const allCards = this.getAllCards();
    let i = allCards.findIndex((card: FlashCard) => params.title === card.title);
    allCards[i].title = params.title;
    allCards[i].front = params.front;
    allCards[i].back = params.back;
    allCards[i].tags = params.tags;
    localStorage.setItem("user-notes", JSON.stringify(allCards));
  },

  deleteCard(title: string): void {
    const allCards = this.getAllCards();
    let i = allCards.findIndex((card: FlashCard) => card.title === title);
    if (i !== -1) allCards.splice(i, 1);
    localStorage.setItem("user-notes", JSON.stringify(allCards));
  },

  getCardsByTag(tag: string): FlashCard[] {
    const allCards = this.getAllCards();
    return allCards.filter((card: FlashCard) => card.tags?.includes(tag));
  },
};

export default CardManager;
