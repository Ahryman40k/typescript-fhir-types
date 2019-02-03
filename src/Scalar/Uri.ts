
        /**
         * String of characters used to identify a name or a resource 
         */
        export class Uri  {
            private regexp = /^\S*$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: string | undefined;
            set value( v: string | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Uri value";
                }

                this._value = v;
            }

            get value(): string | undefined {
                return this._value;
            }
        }
        