
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_MedicationKnowledge_Substitution} from './RTTI_MedicationKnowledge_Substitution';
import {RTTI_MedicationKnowledge_Schedule} from './RTTI_MedicationKnowledge_Schedule';
import {RTTI_MedicationKnowledge_MaxDispense} from './RTTI_MedicationKnowledge_MaxDispense';




        const mandatory = t.type({
           regulatoryAuthority: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
substitution: t.array(RTTI_MedicationKnowledge_Substitution),
schedule: t.array(RTTI_MedicationKnowledge_Schedule),
maxDispense: RTTI_MedicationKnowledge_MaxDispense
        });
        

        export var RTTI_MedicationKnowledge_Regulatory:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_Regulatory = t.TypeOf<typeof RTTI_MedicationKnowledge_Regulatory>;
        
        