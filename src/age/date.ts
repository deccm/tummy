export function getRandomDate(start: Date, end: Date) {
  const min = start.getTime();
  const max = end.getTime();
  const timestamp = Math.floor(Math.random() * (max - min + 1) + min);
  return new Date(timestamp);
}
