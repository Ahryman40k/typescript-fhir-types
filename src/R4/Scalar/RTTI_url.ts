import {Type, success, failure, identity} from 'io-ts';

/**
 * A URI that is a literal reference
 */
export class RTTI_urlType extends Type<string> {
  private static regexExp = /^\S*$/;

  // readonly _tag: 'RTTI_urlType' = 'RTTI_urlType';

  constructor() {
    super(
      /** a unique name for this codec */

      'RTTI_urlType',
      /** a custom type guard */

      (m): m is string =>
        typeof m === 'string' && RTTI_urlType.regexExp.test(m.toString()),
      /** succeeds if a value of type I can be decoded to a value of type A */

      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      /** converts a value of type A to a value of type O */
      identity,
    );
  }
}

export const RTTI_url = new RTTI_urlType();
