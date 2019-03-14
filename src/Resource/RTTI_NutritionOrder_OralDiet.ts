
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_NutritionOrder_Nutrient} from './RTTI_NutritionOrder_Nutrient';
import {RTTI_NutritionOrder_Texture} from './RTTI_NutritionOrder_Texture';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: t.array(RTTI_CodeableConcept),
schedule: t.array(RTTI_Timing),
nutrient: t.array(RTTI_NutritionOrder_Nutrient),
texture: t.array(RTTI_NutritionOrder_Texture),
fluidConsistencyType: t.array(RTTI_CodeableConcept),
instruction: t.string,
_instruction: RTTI_Element
        });
        

        export var RTTI_NutritionOrder_OralDiet:any = t.intersection([mandatory, partial]);
        

export type INutritionOrder_OralDiet = t.TypeOf<typeof RTTI_NutritionOrder_OralDiet>;
        
        