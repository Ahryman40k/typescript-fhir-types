
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
source: RTTI_Reference,
organization: RTTI_Reference,
method: RTTI_CodeableConcept,
date: t.string,
_date: RTTI_Element,
sourceIdentityCertificate: t.string,
_sourceIdentityCertificate: RTTI_Element,
proxyIdentityCertificate: t.string,
_proxyIdentityCertificate: RTTI_Element,
signedProxyRightString: t.string,
_signedProxyRightString: RTTI_Element,
signedProxyRightUri: t.string,
_signedProxyRightUri: RTTI_Element,
signedSourceAttestationString: t.string,
_signedSourceAttestationString: RTTI_Element,
signedSourceAttestationUri: t.string,
_signedSourceAttestationUri: RTTI_Element
        });
        

        export var RTTI_VerificationResult_Attestation:any = t.intersection([mandatory, partial]);
        

export type IVerificationResult_Attestation = t.TypeOf<typeof RTTI_VerificationResult_Attestation>;
        
        