
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A UUID, represented as a URI
             */
            export class uuid extends Type<string> {

                private static regexExp = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/; 

                readonly _tag: 'uuid' = 'uuid';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "uuid",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && uuid.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }
        