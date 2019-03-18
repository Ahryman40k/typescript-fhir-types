
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine
             */
            export class markdown extends Type<string> {

                private static regexExp = /^[ \r\n\t\S]+$/; 

                readonly _tag: 'markdown' = 'markdown';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "markdown",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && markdown.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }
        