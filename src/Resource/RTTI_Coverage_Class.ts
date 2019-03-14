
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           type: RTTI_Coding
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
value: t.string,
_value: RTTI_Element,
name: t.string,
_name: RTTI_Element
        });
        

        export var RTTI_Coverage_Class:any = t.intersection([mandatory, partial]);
        

export type ICoverage_Class = t.TypeOf<typeof RTTI_Coverage_Class>;
        
        