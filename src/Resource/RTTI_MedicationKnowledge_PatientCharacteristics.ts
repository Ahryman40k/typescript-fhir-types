
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';

import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
characteristicCodeableConcept: RTTI_CodeableConcept,
characteristicQuantity: RTTI_Quantity,
value: t.array(t.string),
_value: t.array(RTTI_Element)
        });
        

        export var RTTI_MedicationKnowledge_PatientCharacteristics:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_PatientCharacteristics = t.TypeOf<typeof RTTI_MedicationKnowledge_PatientCharacteristics>;
        
        