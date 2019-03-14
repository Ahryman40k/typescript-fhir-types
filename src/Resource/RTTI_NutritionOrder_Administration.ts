
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Ratio} from './RTTI_Ratio';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
schedule: RTTI_Timing,
quantity: RTTI_Quantity,
rateQuantity: RTTI_Quantity,
rateRatio: RTTI_Ratio
        });
        

        export var RTTI_NutritionOrder_Administration:any = t.intersection([mandatory, partial]);
        

export type INutritionOrder_Administration = t.TypeOf<typeof RTTI_NutritionOrder_Administration>;
        
        