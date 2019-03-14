
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
classification: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_MedicationKnowledge_MedicineClassification:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_MedicineClassification = t.TypeOf<typeof RTTI_MedicationKnowledge_MedicineClassification>;
        
        