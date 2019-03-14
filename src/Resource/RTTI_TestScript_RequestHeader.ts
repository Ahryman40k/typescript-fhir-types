
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
field: t.string,
_field: RTTI_Element,
value: t.string,
_value: RTTI_Element
        });
        

        export var RTTI_TestScript_RequestHeader:any = t.intersection([mandatory, partial]);
        

export type ITestScript_RequestHeader = t.TypeOf<typeof RTTI_TestScript_RequestHeader>;
        
        