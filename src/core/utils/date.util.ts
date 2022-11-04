export const dateStringToLocalStringUtil = (dateString?: string) => {
  return dateString ? new Date(dateString).toLocaleString() : '';
};
