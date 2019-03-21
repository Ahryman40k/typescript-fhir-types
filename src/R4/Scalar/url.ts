
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A URI that is a literal reference
             */
            export class urlType extends Type<string> {

                private static regexExp = /^\S*$/; 

                // readonly _tag: 'urlType' = 'urlType';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "urlType",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && urlType.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }

            export const RTTI_url = new urlType(); 
        