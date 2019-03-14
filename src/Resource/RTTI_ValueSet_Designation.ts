
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
language: t.string,
_language: RTTI_Element,
use: RTTI_Coding,
value: t.string,
_value: RTTI_Element
        });
        

        export var RTTI_ValueSet_Designation:any = t.intersection([mandatory, partial]);
        

export type IValueSet_Designation = t.TypeOf<typeof RTTI_ValueSet_Designation>;
        
        