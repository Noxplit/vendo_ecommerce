export function mathRandom(max) {
  return Math.floor(Math.random() * max);
}

export const sumBy = (arr) => arr.reduce((prev, cur) => prev + cur, 0);