import { R4 } from "../index";
import * as E from "fp-ts/lib/Either";

const T = R4.RTTI_canonical;
const value = "http://snomed.info/sct";

describe("Scalar canonical", () => {
  test("should decode a valid value", () => {
    expect(E.isRight(T.decode(value)));
  });

  test("should return the same reference if succeeded", () => {
    E.fold(
      (e) => fail(e),
      (v) => expect(v).toEqual(value)
    )(T.decode(value));
  });

  test("Should not decode invalid value", () => {
    expect(E.isLeft(T.decode(2)));
  });
});
