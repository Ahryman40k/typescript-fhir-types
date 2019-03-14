
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
start: t.string,
_start: RTTI_Element,
end: t.string,
_end: RTTI_Element
        });
        

        export var RTTI_Period:any = t.intersection([mandatory, partial]);
        

export type IPeriod = t.TypeOf<typeof RTTI_Period>;
        
        