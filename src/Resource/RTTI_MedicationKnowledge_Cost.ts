
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Money} from './RTTI_Money';




        const mandatory = t.type({
           type: RTTI_CodeableConcept,
cost: RTTI_Money
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
source: t.string,
_source: RTTI_Element
        });
        

        export var RTTI_MedicationKnowledge_Cost:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_Cost = t.TypeOf<typeof RTTI_MedicationKnowledge_Cost>;
        
        