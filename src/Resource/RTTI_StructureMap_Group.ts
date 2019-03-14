
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_StructureMap_Input} from './RTTI_StructureMap_Input';
import {RTTI_StructureMap_Rule} from './RTTI_StructureMap_Rule';

export enum StructureMap_GroupTypeModeKind {
                none = 'none',
types = 'types',
typeAndTypes = 'typeAndTypes'
            }
const StructureMap_GroupTypeModeKindKeys = t.keyof({
                [StructureMap_GroupTypeModeKind.none]: null,
[StructureMap_GroupTypeModeKind.types]: null,
[StructureMap_GroupTypeModeKind.typeAndTypes]: null
            });


        const mandatory = t.type({
           input: t.array(RTTI_StructureMap_Input),
rule: t.array(RTTI_StructureMap_Rule)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
extends: t.string,
_extends: RTTI_Element,
typeMode: StructureMap_GroupTypeModeKindKeys,
_typeMode: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_StructureMap_Group:any = t.intersection([mandatory, partial]);
        

export type IStructureMap_Group = t.TypeOf<typeof RTTI_StructureMap_Group>;
        
        