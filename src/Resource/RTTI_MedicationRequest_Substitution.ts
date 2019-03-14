
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
allowed: t.boolean,
_allowed: RTTI_Element,
reason: RTTI_CodeableConcept
        });
        

        export var RTTI_MedicationRequest_Substitution:any = t.intersection([mandatory, partial]);
        

export type IMedicationRequest_Substitution = t.TypeOf<typeof RTTI_MedicationRequest_Substitution>;
        
        