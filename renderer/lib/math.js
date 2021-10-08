export function log(x, base = 10) {
  if (x == 0) {
    return Infinity;
  }
  return Math.log(x) / Math.log(base);
}
