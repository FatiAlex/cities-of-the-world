export const validateNumberField = (text: string) => {
  return Number(text) || text === '' || text === '-';
};
