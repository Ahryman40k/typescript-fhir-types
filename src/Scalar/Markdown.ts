
        /**
         * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine 
         */
        export class Markdown  {
            private regexp = /^[ \r\n\t\S]+$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: string | undefined;
            set value( v: string | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Markdown value";
                }

                this._value = v;
            }

            get value(): string | undefined {
                return this._value;
            }
        }
        