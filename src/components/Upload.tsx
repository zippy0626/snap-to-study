import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Upload.css";

import preProcess from "../modules/preProcess.ts";
import { getTextFromImage } from "../modules/imageOCR.ts";
import { makeFlashcards } from "../modules/openAI.ts";
import type { FlashCard } from "../modules/flashCard.ts";

// helper: File -> HTMLImageElement
function fileToImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = reject;
    img.src = url;
  });
}

function Upload() {
  const navigate = useNavigate();
  const [img, setImg] = useState<File | null>(null);
  const [qty, setQty] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);

    const files = fd.getAll("file") as File[];
    const imgVar: File | null = files[0] ?? null;

    const qtyStr = fd.get("qty") as string | null;
    const qtyVar: number | null = qtyStr ? Number(qtyStr) : null;

    setImg(imgVar);
    setQty(qtyVar);

    if (!imgVar) {
      console.error("No image selected");
      return;
    }

    // 1) Convert File -> HTMLImageElement
    const imgEl = await fileToImage(imgVar);

    // 2) Preprocess & OCR
    const canvas = preProcess.preProcessImage(imgEl); // expects HTMLImageElement
    const text = await getTextFromImage(canvas);

    // 3) Make flashcards (use qtyVar or default)
    const key = import.meta.env.VITE_OPENAI_KEY as string | undefined;
    if (!key) {
      console.error("Missing VITE_OPENAI_KEY");
      return;
    }
    const count = qtyVar ?? 3;
    const flashCards = await makeFlashcards(text, count, key);
    console.log(flashCards);
    flashCards.forEach((c: FlashCard) => console.log(c.title));

    // 4) Navigate after processing (optionally pass data via state)
    navigate("/flashcards", { state: { flashCards } });
  };

  return (
    <div className="upload">
      <form id="upload-form" onSubmit={handleSubmit}>
        <legend>Upload files to get started</legend>

        <div className="file-area">
          <label htmlFor="file">
            <div>Select Files (.jpg, .jpeg, .png)</div>
          </label>
          <input
            name="file"
            id="file"
            type="file"
            accept=".jpg,.jpeg,.png"
            multiple
            required
          />
        </div>

        <label htmlFor="qty">How many flashcards?</label>
        <input id="qty" name="qty" type="number" min={1} max={50} step={1} required />

        <button type="submit">Snap!</button>
      </form>
    </div>
  );
}

export default Upload;
