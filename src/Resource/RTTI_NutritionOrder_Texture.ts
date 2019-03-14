
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
modifier: RTTI_CodeableConcept,
foodType: RTTI_CodeableConcept
        });
        

        export var RTTI_NutritionOrder_Texture:any = t.intersection([mandatory, partial]);
        

export type INutritionOrder_Texture = t.TypeOf<typeof RTTI_NutritionOrder_Texture>;
        
        