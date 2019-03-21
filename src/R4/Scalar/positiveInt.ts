
            import { Type, success, failure, identity } from "io-ts";

            /**
             * An integer with a value that is positive (e.g. >0)
             */
            export class positiveIntType extends Type<number> {

                private static regexExp = /^[1-9][0-9]*$/; 

                // readonly _tag: 'positiveIntType' = 'positiveIntType';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "positiveIntType",
                        /** a custom type guard */ 
                        (m): m is number => typeof m === "number" && positiveIntType.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }

            export const RTTI_positiveInt = new positiveIntType(); 
        