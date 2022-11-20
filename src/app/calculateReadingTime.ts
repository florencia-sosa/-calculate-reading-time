export const calculateReadingTime = (answer: string): number => {
  const wordsPerMinute = 225;
  const wordsInAnswer = answer.trim().split(/\s+/).length;
  const estimatedReadingTime = Math.ceil(wordsInAnswer / wordsPerMinute);
  return estimatedReadingTime;
};
