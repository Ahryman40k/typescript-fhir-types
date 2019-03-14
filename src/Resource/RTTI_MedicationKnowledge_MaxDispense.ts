
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Duration} from './RTTI_Duration';




        const mandatory = t.type({
           quantity: RTTI_Quantity
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
period: RTTI_Duration
        });
        

        export var RTTI_MedicationKnowledge_MaxDispense:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_MaxDispense = t.TypeOf<typeof RTTI_MedicationKnowledge_MaxDispense>;
        
        