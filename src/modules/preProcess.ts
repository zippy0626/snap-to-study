const preProcess = {
  preProcessImage(img: HTMLImageElement): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    // Get pixel data
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;

    // Thresholding
    const threshold = 128; // adjust 0-255
    for (let i = 0; i < data.length; i += 4) {
      const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const val = brightness > threshold ? 255 : 0;
      data[i] = data[i + 1] = data[i + 2] = val;
    }

    ctx.putImageData(imageData, 0, 0);

    return canvas;
  },
};

export default preProcess;