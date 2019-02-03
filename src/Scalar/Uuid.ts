
        /**
         * A UUID, represented as a URI 
         */
        export class Uuid  {
            private regexp = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

            private isAcceptable(s: string) {
                return this.regexp.test(s);
            }

            private _value: string | undefined;
            set value( v: string | undefined ){
                if (!this.isAcceptable(v!.toString())){
                    throw "ArgumentException: parameter is not a valid Uuid value";
                }

                this._value = v;
            }

            get value(): string | undefined {
                return this._value;
            }
        }
        