
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
system: t.string,
_system: RTTI_Element,
abstract: t.boolean,
_abstract: RTTI_Element,
inactive: t.boolean,
_inactive: RTTI_Element,
version: t.string,
_version: RTTI_Element,
code: t.string,
_code: RTTI_Element,
display: t.string,
_display: RTTI_Element,
designation: t.array(RTTI_ValueSet_Designation),
contains: t.array(RTTI_ValueSet_Contains)
        });
        

        export var RTTI_ValueSet_Contains:any = t.intersection([mandatory, partial]);
        

export type IValueSet_Contains = t.TypeOf<typeof RTTI_ValueSet_Contains>;
        
        