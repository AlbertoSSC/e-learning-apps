export const randomizePositions = (images: string[]): string[] => {
  const shuffledImages = [...images];

  for (let i = shuffledImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledImages[i], shuffledImages[j]] = [
      shuffledImages[j],
      shuffledImages[i],
    ];
  }

  return shuffledImages;
};
