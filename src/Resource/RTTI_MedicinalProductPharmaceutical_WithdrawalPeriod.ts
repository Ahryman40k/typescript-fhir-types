
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           tissue: RTTI_CodeableConcept,
value: RTTI_Quantity
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
supportingInformation: t.string,
_supportingInformation: RTTI_Element
        });
        

        export var RTTI_MedicinalProductPharmaceutical_WithdrawalPeriod:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductPharmaceutical_WithdrawalPeriod = t.TypeOf<typeof RTTI_MedicinalProductPharmaceutical_WithdrawalPeriod>;
        
        