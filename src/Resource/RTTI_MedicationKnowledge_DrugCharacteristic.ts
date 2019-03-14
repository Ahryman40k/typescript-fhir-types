
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
valueCodeableConcept: RTTI_CodeableConcept,
valueString: t.string,
_valueString: RTTI_Element,
valueQuantity: RTTI_Quantity,
valueBase64Binary: t.string,
_valueBase64Binary: RTTI_Element
        });
        

        export var RTTI_MedicationKnowledge_DrugCharacteristic:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_DrugCharacteristic = t.TypeOf<typeof RTTI_MedicationKnowledge_DrugCharacteristic>;
        
        