export const normalizeString = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/n\u0303/g, 'ñ') // Reconstruir "ñ"
    .replace(/N\u0303/g, 'Ñ') // Reconstruir "Ñ"
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s\u00D1\u00F1]/g, '') // Remove special characters except for Ñ (U+00D1) and ñ (U+00F1)
    .toLowerCase()
    .trim();
};
