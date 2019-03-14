
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Dosage} from './RTTI_Dosage';




        const mandatory = t.type({
           type: RTTI_CodeableConcept,
dosage: t.array(RTTI_Dosage)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_MedicationKnowledge_Dosage:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_Dosage = t.TypeOf<typeof RTTI_MedicationKnowledge_Dosage>;
        
        