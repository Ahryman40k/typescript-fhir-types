import { Type, success, failure, identity } from 'io-ts';

/**
 * xhtml - escaped html (see specfication)
 */
export class RTTI_xhtmlType extends Type<string> {
	// readonly _tag: 'RTTI_xhtmlType' = 'RTTI_xhtmlType';

	constructor() {
		super(
			/** a unique name for this codec */

			'RTTI_xhtmlType',
			/** a custom type guard */

			(m): m is string => typeof m === 'string',
			/** succeeds if a value of type I can be decoded to a value of type A */

			(m, c) => (this.is(m) ? success(m) : failure(m, c)),
			/** converts a value of type A to a value of type O */
			identity
		);
	}
}

export const RTTI_xhtml = new RTTI_xhtmlType();
