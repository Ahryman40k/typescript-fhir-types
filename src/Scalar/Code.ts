
        /**
         * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents 
         */
        export class Code  {
            private regexp = /^[^\s]+(\s[^\s]+)*$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: string | undefined;
            set value( v: string | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Code value";
                }

                this._value = v;
            }

            get value(): string | undefined {
                return this._value;
            }
        }
        