
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeSystem_Designation} from './RTTI_CodeSystem_Designation';
import {RTTI_CodeSystem_Property1} from './RTTI_CodeSystem_Property1';




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
definition: t.string,
_definition: RTTI_Element,
designation: t.array(RTTI_CodeSystem_Designation),
property: t.array(RTTI_CodeSystem_Property1),
concept: t.array(RTTI_CodeSystem_Concept)
        });
        

        export var RTTI_CodeSystem_Concept:any = t.intersection([mandatory, partial]);
        

export type ICodeSystem_Concept = t.TypeOf<typeof RTTI_CodeSystem_Concept>;
        
        