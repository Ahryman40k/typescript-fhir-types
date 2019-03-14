
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
low: RTTI_Quantity,
high: RTTI_Quantity
        });
        

        export var RTTI_Range:any = t.intersection([mandatory, partial]);
        

export type IRange = t.TypeOf<typeof RTTI_Range>;
        
        