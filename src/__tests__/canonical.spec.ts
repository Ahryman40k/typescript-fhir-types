import { R4 } from "../index";

const T = R4.RTTI_canonical;
const value = "http://snomed.info/sct";

describe("Scalar canonical", () => {
  test("should decode a valid value", () => {
    expect(T.decode(value)._tag).toBe("Right");
  });

  test("should return the same reference if succeeded", () => {
    expect(T.decode(value).value).toEqual(value);
  });

  test("Should not decode invalid value", () => {
    expect(T.decode(2)._tag).toBe("Left");
  });
});
