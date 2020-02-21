import { addAsync } from "../01-callbacks";
import * as addlib from "../lib/add";
const { add } = addlib;

const createInputs = length =>
  Array.from({ length }, () => Math.floor(Math.random() * 10));

describe("01-callbacks", () => {
  beforeAll(() => {
    addlib.add = jest.fn(addlib.add);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("addAsync returns undefined", () => {
    const expected = undefined;
    const args = createInputs(2);
    const actual = addAsync(...args, () => {});
    expect(actual).toBe(expected);
  });

  test("addAsync calls lib/add.js", done => {
    expect.assertions(1);
    const args = createInputs(2);
    addAsync(...args, () => {
      expect(addlib.add).toHaveBeenCalledWith(...args);
      done();
    });
  });

  test("addAsync with success returns err = null", done => {
    expect.assertions(1);
    const args = createInputs(2);
    addAsync(...args, err => {
      expect(err).toBeNull();
      done();
    });
  });

  test("addAsync with err returns err", done => {
    expect.assertions(1);
    const expected = new TypeError("x was expected to be type Number");
    addAsync("a", "b", err => {
      expect(err).toStrictEqual(expected);
      done();
    });
  });

  test("addAsync with success returns value", done => {
    expect.assertions(1);
    const args = createInputs(2);
    const expected = args.reduce(add);
    addAsync(...args, (err, value) => {
      expect(value).toBe(expected);
      done();
    });
  });

  test("addAsync is asynchronous", done => {
    expect.assertions(2);
    const args = createInputs(2);
    const expected = args.reduce(add);
    let actual;
    addAsync(...args, (err, value) => {
      actual = value;
      expect(value).toBe(expected);
      done();
    });
    expect(actual).toBeUndefined();
  });
});
