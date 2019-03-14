
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identity: t.string,
_identity: RTTI_Element,
language: t.string,
_language: RTTI_Element,
map: t.string,
_map: RTTI_Element,
comment: t.string,
_comment: RTTI_Element
        });
        

        export var RTTI_ElementDefinition_Mapping:any = t.intersection([mandatory, partial]);
        

export type IElementDefinition_Mapping = t.TypeOf<typeof RTTI_ElementDefinition_Mapping>;
        
        