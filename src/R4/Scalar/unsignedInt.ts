
            import { Type, success, failure, identity } from "io-ts";

            /**
             * An integer with a value that is not negative (e.g. >= 0)
             */
            export class unsignedIntType extends Type<number> {

                private static regexExp = /^[0]|([1-9][0-9]*)$/; 

                // readonly _tag: 'unsignedIntType' = 'unsignedIntType';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "unsignedIntType",
                        /** a custom type guard */ 
                        (m): m is number => typeof m === "number" && unsignedIntType.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }

            export const RTTI_unsignedInt = new unsignedIntType(); 
        