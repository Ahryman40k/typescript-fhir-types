
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine
             */
            export class markdownType extends Type<string> {

                private static regexExp = /^[ \r\n\t\S]+$/; 

                // readonly _tag: 'markdownType' = 'markdownType';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "markdownType",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && markdownType.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }

            export const RTTI_markdown = new markdownType(); 
        