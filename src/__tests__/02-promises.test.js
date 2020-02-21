import { addPromise, parallelApiCalls, serialApiCalls } from "../02-promises";
import * as addlib from "../lib/add";
const { add } = addlib;

const createInputs = length =>
  Array.from({ length }, () => Math.floor(Math.random() * 10));

const apiResponse = [
  { id: 1, name: "Vince Noir" },
  { id: 2, name: "Howard Moon" }
];

describe("01-promises", () => {
  beforeAll(() => {
    addlib.add = jest.fn(addlib.add);
  });

  beforeEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  test("addPromise success returns value", () => {
    expect.assertions(1);
    const args = createInputs(2);
    const expected = add(...args);
    const actual = addPromise(...args);
    return expect(actual).resolves.toBe(expected);
  });

  test("addPromise failure rejects", () => {
    expect.assertions(1);
    const expected = new TypeError("x was expected to be type Number");
    const actual = addPromise("a", "b");
    return expect(actual).rejects.toStrictEqual(expected);
  });

  test("serialApiCalls executes in serial", async () => {
    expect.assertions(2);

    const start = new Date();
    const actual = await serialApiCalls();
    const end = new Date();

    expect(end - start).toBeGreaterThanOrEqual(1000);
    expect(actual).toStrictEqual(apiResponse);
  });

  test("parallelApiCalls executes in parallel", async () => {
    expect.assertions(3);

    const start = new Date();
    const actual = await parallelApiCalls();
    const end = new Date();

    expect(end - start).toBeGreaterThanOrEqual(500);
    expect(end - start).toBeLessThan(1000);
    expect(actual).toStrictEqual(apiResponse);
  });
});
