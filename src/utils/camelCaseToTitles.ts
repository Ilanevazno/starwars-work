export const camelCaseToTitles = (key: string): string => {
  return key.replace(/([A-Z])/g, " $1").toLowerCase();
};
