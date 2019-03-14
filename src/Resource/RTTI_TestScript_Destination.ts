
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           profile: RTTI_Coding
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
index: t.number,
_index: RTTI_Element
        });
        

        export var RTTI_TestScript_Destination:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Destination = t.TypeOf<typeof RTTI_TestScript_Destination>;
        
        