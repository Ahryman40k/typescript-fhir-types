
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
start: t.number,
_start: RTTI_Element,
end: t.number,
_end: RTTI_Element
        });
        

        export var RTTI_Sequence_Outer:any = t.intersection([mandatory, partial]);
        

export type ISequence_Outer = t.TypeOf<typeof RTTI_Sequence_Outer>;
        
        