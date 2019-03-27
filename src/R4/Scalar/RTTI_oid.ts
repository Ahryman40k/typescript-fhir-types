import { Type, success, failure, identity } from 'io-ts';

/**
 * An OID represented as a URI
 */
export class RTTI_oidType extends Type<string> {
	private static regexExp = /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/;

	// readonly _tag: 'RTTI_oidType' = 'RTTI_oidType';

	constructor() {
		super(
			/** a unique name for this codec */

			'RTTI_oidType',
			/** a custom type guard */

			(m): m is string =>
				typeof m === 'string' && RTTI_oidType.regexExp.test(m.toString()),
			/** succeeds if a value of type I can be decoded to a value of type A */

			(m, c) => (this.is(m) ? success(m) : failure(m, c)),
			/** converts a value of type A to a value of type O */
			identity
		);
	}
}

export const RTTI_oid = new RTTI_oidType();
