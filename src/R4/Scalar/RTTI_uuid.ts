import {Type, success, failure, identity} from 'io-ts';

/**
 * A UUID, represented as a URI
 */
export class RTTI_uuidType extends Type<string> {
  private static regexExp =
    /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

  // readonly _tag: 'RTTI_uuidType' = 'RTTI_uuidType';

  constructor() {
    super(
      /** a unique name for this codec */

      'RTTI_uuidType',
      /** a custom type guard */

      (m): m is string =>
        typeof m === 'string' && RTTI_uuidType.regexExp.test(m.toString()),
      /** succeeds if a value of type I can be decoded to a value of type A */

      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      /** converts a value of type A to a value of type O */
      identity,
    );
  }
}

export const RTTI_uuid = new RTTI_uuidType();
