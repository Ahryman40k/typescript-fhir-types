import { Type, success, failure, identity } from "io-ts";
// import { createValidator, W3CValidate } from 'w3c-validate';


/**
 * xhtml - escaped html (see specfication)
 */
export class xhtml extends Type<string> {

    readonly _tag: 'xhtml' = 'xhtml';

    // w3cValidator: W3CValidate.Validator = createValidator();

    constructor() {


        super(
            /** a unique name for this codec */
            "xhtml",
            /** a custom type guard */
            (m): m is string => typeof m === "string"  /*&& this.w3cValidator.validate( m ) */,
            /** succeeds if a value of type I can be decoded to a value of type A */
            (m, c) => (this.is(m) ? success(m) : failure(m, c)),
            /** converts a value of type A to a value of type O */
            identity
        )
    }
}
