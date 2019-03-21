
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A URI that is a reference to a canonical URL on a FHIR resource
             */
            export class canonicalType extends Type<string> {

                private static regexExp = /^\S*$/; 

                // readonly _tag: 'canonicalType' = 'canonicalType';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "canonicalType",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && canonicalType.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }

            export const RTTI_canonical = new canonicalType(); 
        