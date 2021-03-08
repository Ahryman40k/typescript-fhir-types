import {Type, success, failure, identity} from 'io-ts';

/**
 * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
 */
export class RTTI_codeType extends Type<string> {
  private static regexExp = /^[^\s]+(\s[^\s]+)*$/;

  // readonly _tag: 'RTTI_codeType' = 'RTTI_codeType';

  constructor() {
    super(
      /** a unique name for this codec */

      'RTTI_codeType',
      /** a custom type guard */

      (m): m is string =>
        typeof m === 'string' && RTTI_codeType.regexExp.test(m.toString()),
      /** succeeds if a value of type I can be decoded to a value of type A */

      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      /** converts a value of type A to a value of type O */
      identity,
    );
  }
}

export const RTTI_code = new RTTI_codeType();
