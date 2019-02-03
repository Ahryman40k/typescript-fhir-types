
        /**
         * A whole number 
         */
        export class Integer  {
            private regexp = /^-?([0]|([1-9][0-9]*))$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: number | undefined;
            set value( v: number | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Integer value";
                }

                this._value = v;
            }

            get value(): number | undefined {
                return this._value;
            }
        }
        