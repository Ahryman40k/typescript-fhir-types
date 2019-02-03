
        /**
         * A time during the day, with no date specified 
         */
        export class Time  {
            private regexp = /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: string | undefined;
            set value( v: string | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Time value";
                }

                this._value = v;
            }

            get value(): string | undefined {
                return this._value;
            }
        }
        