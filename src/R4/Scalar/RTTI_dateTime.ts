import {Type, success, failure, identity} from 'io-ts';

/**
 * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
 */
export class RTTI_dateTimeType extends Type<string> {
  private static regexExp =
    /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/;

  // readonly _tag: 'RTTI_dateTimeType' = 'RTTI_dateTimeType';

  constructor() {
    super(
      /** a unique name for this codec */

      'RTTI_dateTimeType',
      /** a custom type guard */

      (m): m is string =>
        typeof m === 'string' && RTTI_dateTimeType.regexExp.test(m.toString()),
      /** succeeds if a value of type I can be decoded to a value of type A */

      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      /** converts a value of type A to a value of type O */
      identity,
    );
  }
}

export const RTTI_dateTime = new RTTI_dateTimeType();
