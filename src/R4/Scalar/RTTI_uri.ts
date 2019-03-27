import { Type, success, failure, identity } from 'io-ts';

/**
 * String of characters used to identify a name or a resource
 */
export class RTTI_uriType extends Type<string> {
	private static regexExp = /^\S*$/;

	// readonly _tag: 'RTTI_uriType' = 'RTTI_uriType';

	constructor() {
		super(
			/** a unique name for this codec */

			'RTTI_uriType',
			/** a custom type guard */

			(m): m is string =>
				typeof m === 'string' && RTTI_uriType.regexExp.test(m.toString()),
			/** succeeds if a value of type I can be decoded to a value of type A */

			(m, c) => (this.is(m) ? success(m) : failure(m, c)),
			/** converts a value of type A to a value of type O */
			identity
		);
	}
}

export const RTTI_uri = new RTTI_uriType();
