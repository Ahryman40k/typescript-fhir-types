
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
quantity: RTTI_Quantity
        });
        

        export var RTTI_MedicationKnowledge_Packaging:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_Packaging = t.TypeOf<typeof RTTI_MedicationKnowledge_Packaging>;
        
        