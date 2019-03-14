
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Ratio} from './RTTI_Ratio';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
text: t.string,
_text: RTTI_Element,
site: RTTI_CodeableConcept,
route: RTTI_CodeableConcept,
method: RTTI_CodeableConcept,
dose: RTTI_Quantity,
rateRatio: RTTI_Ratio,
rateQuantity: RTTI_Quantity
        });
        

        export var RTTI_MedicationAdministration_Dosage:any = t.intersection([mandatory, partial]);
        

export type IMedicationAdministration_Dosage = t.TypeOf<typeof RTTI_MedicationAdministration_Dosage>;
        
        