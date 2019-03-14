
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_StructureMap_Source} from './RTTI_StructureMap_Source';
import {RTTI_StructureMap_Target} from './RTTI_StructureMap_Target';
import {RTTI_StructureMap_Dependent} from './RTTI_StructureMap_Dependent';




        const mandatory = t.type({
           source: t.array(RTTI_StructureMap_Source)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
target: t.array(RTTI_StructureMap_Target),
rule: t.array(RTTI_StructureMap_Rule),
dependent: t.array(RTTI_StructureMap_Dependent),
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_StructureMap_Rule:any = t.intersection([mandatory, partial]);
        

export type IStructureMap_Rule = t.TypeOf<typeof RTTI_StructureMap_Rule>;
        
        