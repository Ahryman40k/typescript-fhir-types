
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
modifier: RTTI_CodeableConcept,
amount: RTTI_Quantity
        });
        

        export var RTTI_NutritionOrder_Nutrient:any = t.intersection([mandatory, partial]);
        

export type INutritionOrder_Nutrient = t.TypeOf<typeof RTTI_NutritionOrder_Nutrient>;
        
        