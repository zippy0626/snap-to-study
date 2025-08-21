import Tesseract from "tesseract.js";

// Single Worker for one image
export async function getTextFromImage(image: File): Promise<string> {
  const worker = await Tesseract.createWorker("eng");

  worker.setParameters({
    tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!? ",
  });

  const {
    data: { text },
  } = await worker.recognize(image);

  await worker.terminate();

  return text;
}

// Multiple Workers for multiple images
export async function getTextFromMultipleImages(...images: File[]): Promise<string[]> {
  const scheduler = Tesseract.createScheduler();

  const getWorker = async () => {
    const worker = await Tesseract.createWorker("eng");
    scheduler.addWorker(worker);
  };

  // Basically loading all the workers into scheduler
  const workerCount = 3;
  await Promise.all(
    Array(workerCount)
      .fill(0)
      .map(() => getWorker())
  );

  // Add images as jobs
  const results = await Promise.all(
    images.map((img) => scheduler.addJob("recognize", img).then((res) => res.data.text))
  );

  await scheduler.terminate();
  return results;
}
