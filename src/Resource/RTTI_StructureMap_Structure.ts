
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum StructureMap_StructureModeKind {
                source = 'source',
queried = 'queried',
target = 'target',
produced = 'produced'
            }
const StructureMap_StructureModeKindKeys = t.keyof({
                [StructureMap_StructureModeKind.source]: null,
[StructureMap_StructureModeKind.queried]: null,
[StructureMap_StructureModeKind.target]: null,
[StructureMap_StructureModeKind.produced]: null
            });


        const mandatory = t.type({
           url: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
mode: StructureMap_StructureModeKindKeys,
_mode: RTTI_Element,
alias: t.string,
_alias: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_StructureMap_Structure:any = t.intersection([mandatory, partial]);
        

export type IStructureMap_Structure = t.TypeOf<typeof RTTI_StructureMap_Structure>;
        
        