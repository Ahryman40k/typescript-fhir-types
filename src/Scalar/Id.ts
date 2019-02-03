
        /**
         * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive. 
         */
        export class Id  {
            private regexp = /^[A-Za-z0-9\-\.]{1,64}$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: string | undefined;
            set value( v: string | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Id value";
                }

                this._value = v;
            }

            get value(): string | undefined {
                return this._value;
            }
        }
        