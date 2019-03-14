
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
numerator: RTTI_Quantity,
denominator: RTTI_Quantity
        });
        

        export var RTTI_Ratio:any = t.intersection([mandatory, partial]);
        

export type IRatio = t.TypeOf<typeof RTTI_Ratio>;
        
        