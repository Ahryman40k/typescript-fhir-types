
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Reference } from './RTTI_Reference';
import { RTTI_Element } from './RTTI_Element';


const mandatory = t.type({
        organization: RTTI_Reference
});


const partial = t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        identityCertificate: t.string,
        _identityCertificate: RTTI_Element,
        signedValidatorAttestationString: t.string,
        _signedValidatorAttestationString: RTTI_Element,
        signedValidatorAttestationUri: t.string,
        _signedValidatorAttestationUri: RTTI_Element
});


export var RTTI_VerificationResult_Validator: any = t.intersection([mandatory, partial]);


export type IVerificationResult_Validator = t.TypeOf<typeof RTTI_VerificationResult_Validator>;

