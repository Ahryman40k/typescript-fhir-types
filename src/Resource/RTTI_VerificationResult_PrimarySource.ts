
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
organization: RTTI_Reference,
type: t.array(RTTI_CodeableConcept),
validationProcess: t.array(RTTI_CodeableConcept),
validationStatus: RTTI_CodeableConcept,
validationDate: t.string,
_validationDate: RTTI_Element,
canPushUpdates: RTTI_CodeableConcept,
pushTypeAvailable: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_VerificationResult_PrimarySource:any = t.intersection([mandatory, partial]);
        

export type IVerificationResult_PrimarySource = t.TypeOf<typeof RTTI_VerificationResult_PrimarySource>;
        
        