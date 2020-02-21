export const add = (x, y) => {
  if (isNaN(x)) throw new TypeError("x was expected to be type Number");
  if (isNaN(y)) throw new TypeError("y was expected to be type Number");
  return x + y;
};
