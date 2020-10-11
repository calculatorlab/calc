const classNames = (...e: string[]): string =>
  e
    .filter(Boolean)
    .map((i) => i.trim())
    .join(" ");

export const chooseOneClassName = (
  p: string | undefined,
  d: string | undefined
): string => {
  if (p) {
    return p;
  } else if (d) {
    return d;
  }
  return "";
};

export default classNames;
