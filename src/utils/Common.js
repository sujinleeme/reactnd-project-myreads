export const deepCopy = (obj) => {
  if (obj !== undefined && obj !== null) {
    return JSON.parse(JSON.stringify(obj));
  }
  return null;
}