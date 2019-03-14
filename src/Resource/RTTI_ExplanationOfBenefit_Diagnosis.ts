
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
diagnosisCodeableConcept: RTTI_CodeableConcept,
diagnosisReference: RTTI_Reference,
type: t.array(RTTI_CodeableConcept),
onAdmission: RTTI_CodeableConcept,
packageCode: RTTI_CodeableConcept
        });
        

        export var RTTI_ExplanationOfBenefit_Diagnosis:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_Diagnosis = t.TypeOf<typeof RTTI_ExplanationOfBenefit_Diagnosis>;
        
        