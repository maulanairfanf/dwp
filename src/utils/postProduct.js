export const generateDate = () => {
  let date = new Date().toLocaleDateString()
  .split("/")
  .map((d) => (d.length <= 1 ? "0" + d : d));

  return `${date[1]}/${date[0]}/${date[2]}`;
}

export const generateId = () => {
  return Math.random().toString(36).substring(2, 8);
}