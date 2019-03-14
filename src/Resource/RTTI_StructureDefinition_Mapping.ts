
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
uri: t.string,
_uri: RTTI_Element,
name: t.string,
_name: RTTI_Element,
comment: t.string,
_comment: RTTI_Element
        });
        

        export var RTTI_StructureDefinition_Mapping:any = t.intersection([mandatory, partial]);
        

export type IStructureDefinition_Mapping = t.TypeOf<typeof RTTI_StructureDefinition_Mapping>;
        
        