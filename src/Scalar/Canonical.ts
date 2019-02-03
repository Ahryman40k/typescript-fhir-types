
        /**
         * A URI that is a reference to a canonical URI on a FHIR resource 
         */
        export class Canonical  {
            private regexp = /^\S*$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: string | undefined;
            set value( v: string | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Canonical value";
                }

                this._value = v;
            }

            get value(): string | undefined {
                return this._value;
            }
        }
        