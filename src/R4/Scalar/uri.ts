
            import { Type, success, failure, identity } from "io-ts";

            /**
             * String of characters used to identify a name or a resource
             */
            export class uri extends Type<string> {

                private static regexExp = /^\S*$/; 

                readonly _tag: 'uri' = 'uri';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "uri",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && uri.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }
        