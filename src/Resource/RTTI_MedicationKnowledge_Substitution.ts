
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
allowed: t.boolean,
_allowed: RTTI_Element
        });
        

        export var RTTI_MedicationKnowledge_Substitution:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_Substitution = t.TypeOf<typeof RTTI_MedicationKnowledge_Substitution>;
        
        