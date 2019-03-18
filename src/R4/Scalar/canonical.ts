
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A URI that is a reference to a canonical URI on a FHIR resource
             */
            export class canonical extends Type<string> {

                private static regexExp = /^\S*$/; 

                readonly _tag: 'canonical' = 'canonical';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "canonical",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && canonical.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }
        