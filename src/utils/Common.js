export const deepCopy = (obj) => {
  if (obj !== undefined && obj !== null) {
    return JSON.parse(JSON.stringify(obj));
  }
  return null;
}

export const capitalizeTitle = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


  