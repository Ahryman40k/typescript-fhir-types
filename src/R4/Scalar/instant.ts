
            import { Type, success, failure, identity } from "io-ts";

            /**
             * An instant in time - known at least to the second
             */
            export class instant extends Type<string> {

                private static regexExp = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/; 

                readonly _tag: 'instant' = 'instant';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "instant",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && instant.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }
        