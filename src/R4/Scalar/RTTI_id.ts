import {Type, success, failure, identity} from 'io-ts';

/**
 * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
 */
export class RTTI_idType extends Type<string> {
  private static regexExp = /^[A-Za-z0-9-.]{1,64}$/;

  // readonly _tag: 'RTTI_idType' = 'RTTI_idType';

  constructor() {
    super(
      /** a unique name for this codec */

      'RTTI_idType',
      /** a custom type guard */

      (m): m is string =>
        typeof m === 'string' && RTTI_idType.regexExp.test(m.toString()),
      /** succeeds if a value of type I can be decoded to a value of type A */

      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      /** converts a value of type A to a value of type O */
      identity,
    );
  }
}

export const RTTI_id = new RTTI_idType();
