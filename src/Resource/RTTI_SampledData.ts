
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           origin: RTTI_Quantity
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
period: t.number,
_period: RTTI_Element,
factor: t.number,
_factor: RTTI_Element,
lowerLimit: t.number,
_lowerLimit: RTTI_Element,
upperLimit: t.number,
_upperLimit: RTTI_Element,
dimensions: t.number,
_dimensions: RTTI_Element,
data: t.string,
_data: RTTI_Element
        });
        

        export var RTTI_SampledData:any = t.intersection([mandatory, partial]);
        

export type ISampledData = t.TypeOf<typeof RTTI_SampledData>;
        
        