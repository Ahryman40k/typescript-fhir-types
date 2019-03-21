
            import { Type, success, failure, identity } from "io-ts";

            /**
             * xhtml - escaped html (see specfication)
             */
            export class xhtmlType extends Type<string> {

                 

                // readonly _tag: 'xhtmlType' = 'xhtmlType';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "xhtmlType",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string"  , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }

            export const RTTI_xhtml = new xhtmlType(); 
        