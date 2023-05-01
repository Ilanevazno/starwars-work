export const extractIdFromUrl = (url: string): string | undefined => {
  const resultWithId = url.match(/\d+/g);

  if (resultWithId) {
    const [id] = resultWithId;

    return id;
  }
};
