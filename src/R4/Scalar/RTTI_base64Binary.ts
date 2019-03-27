import { Type, success, failure, identity } from 'io-ts';

/**
 * A stream of bytes
 */
export class RTTI_base64BinaryType extends Type<string> {
	// readonly _tag: 'RTTI_base64BinaryType' = 'RTTI_base64BinaryType';

	constructor() {
		super(
			/** a unique name for this codec */

			'RTTI_base64BinaryType',
			/** a custom type guard */

			(m): m is string => typeof m === 'string',
			/** succeeds if a value of type I can be decoded to a value of type A */

			(m, c) => (this.is(m) ? success(m) : failure(m, c)),
			/** converts a value of type A to a value of type O */
			identity
		);
	}
}

export const RTTI_base64Binary = new RTTI_base64BinaryType();
