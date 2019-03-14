
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Ratio} from './RTTI_Ratio';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
doseRange: RTTI_Range,
doseQuantity: RTTI_Quantity,
rateRatio: RTTI_Ratio,
rateRange: RTTI_Range,
rateQuantity: RTTI_Quantity
        });
        

        export var RTTI_Dosage_DoseAndRate:any = t.intersection([mandatory, partial]);
        

export type IDosage_DoseAndRate = t.TypeOf<typeof RTTI_Dosage_DoseAndRate>;
        
        