
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ValueSet_Designation} from './RTTI_ValueSet_Designation';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
display: t.string,
_display: RTTI_Element,
designation: t.array(RTTI_ValueSet_Designation)
        });
        

        export var RTTI_ValueSet_Concept:any = t.intersection([mandatory, partial]);
        

export type IValueSet_Concept = t.TypeOf<typeof RTTI_ValueSet_Concept>;
        
        