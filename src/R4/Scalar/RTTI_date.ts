import {Type, success, failure, identity} from 'io-ts';

/**
 * A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
 */
export class RTTI_dateType extends Type<string> {
  private static regexExp =
    /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/;

  // readonly _tag: 'RTTI_dateType' = 'RTTI_dateType';

  constructor() {
    super(
      /** a unique name for this codec */

      'RTTI_dateType',
      /** a custom type guard */

      (m): m is string =>
        typeof m === 'string' && RTTI_dateType.regexExp.test(m.toString()),
      /** succeeds if a value of type I can be decoded to a value of type A */

      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      /** converts a value of type A to a value of type O */
      identity,
    );
  }
}

export const RTTI_date = new RTTI_dateType();
