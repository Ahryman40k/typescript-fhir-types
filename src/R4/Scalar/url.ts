
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A URI that is a literal reference
             */
            export class url extends Type<string> {

                private static regexExp = /^\S*$/; 

                readonly _tag: 'url' = 'url';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "url",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && url.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }
        