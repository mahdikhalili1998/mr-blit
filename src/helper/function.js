export function extractNumber(text) {
  let match = text.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}
