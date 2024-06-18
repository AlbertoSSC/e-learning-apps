export const randomizePositions = (images: string[]): string[] => {
  return [...images].sort(() => Math.random() - 0.5);
};
