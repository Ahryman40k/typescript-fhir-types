
declare module W3CValidate {
    export class Validator {
        validate(html: string ): boolean;
    }
} 


export function createValidator(): W3CValidate.Validator;