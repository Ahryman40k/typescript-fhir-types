
        /**
         * An OID represented as a URI 
         */
        export class Oid  {
            private regexp = /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: string | undefined;
            set value( v: string | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Oid value";
                }

                this._value = v;
            }

            get value(): string | undefined {
                return this._value;
            }
        }
        