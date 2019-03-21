
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A UUID, represented as a URI
             */
            export class uuidType extends Type<string> {

                private static regexExp = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/; 

                // readonly _tag: 'uuidType' = 'uuidType';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "uuidType",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && uuidType.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }

            export const RTTI_uuid = new uuidType(); 
        