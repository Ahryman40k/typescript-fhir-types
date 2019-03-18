// I could do the same with a branding ?


            import { Type, success, failure, identity } from "io-ts";

            /**
             * A stream of bytes
             */
            export class base64Binary extends Type<string> {

                 

                readonly _tag: 'base64Binary' = 'base64Binary';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "base64Binary",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string"  , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }
        