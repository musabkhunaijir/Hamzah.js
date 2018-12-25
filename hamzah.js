exports.hamzah = (text) => {
  const newText = text.replace(/[أإآ]/g, "ا");
  return newText;
}