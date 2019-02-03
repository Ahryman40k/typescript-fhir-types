
        /**
         * An instant in time - known at least to the second 
         */
        export class Instant  {
            private regexp = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: string | undefined;
            set value( v: string | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Instant value";
                }

                this._value = v;
            }

            get value(): string | undefined {
                return this._value;
            }
        }
        