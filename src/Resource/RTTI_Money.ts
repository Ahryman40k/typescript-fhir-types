
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
value: t.number,
_value: RTTI_Element,
currency: t.string,
_currency: RTTI_Element
        });
        

        export var RTTI_Money:any = t.intersection([mandatory, partial]);
        

export type IMoney = t.TypeOf<typeof RTTI_Money>;
        
        