
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
productName: t.string,
_productName: RTTI_Element,
schedule: t.array(RTTI_Timing),
quantity: RTTI_Quantity,
instruction: t.string,
_instruction: RTTI_Element
        });
        

        export var RTTI_NutritionOrder_Supplement:any = t.intersection([mandatory, partial]);
        

export type INutritionOrder_Supplement = t.TypeOf<typeof RTTI_NutritionOrder_Supplement>;
        
        