
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A rational number with implicit precision
             */
            export class decimalType extends Type<number> {

                private static regexExp = /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/; 

                // readonly _tag: 'decimalType' = 'decimalType';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "decimalType",
                        /** a custom type guard */ 
                        (m): m is number => typeof m === "number" && decimalType.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }

            export const RTTI_decimal = new decimalType(); 
        