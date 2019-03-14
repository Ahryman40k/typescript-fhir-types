
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum StructureMap_InputModeKind {
                source = 'source',
target = 'target'
            }
const StructureMap_InputModeKindKeys = t.keyof({
                [StructureMap_InputModeKind.source]: null,
[StructureMap_InputModeKind.target]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
type: t.string,
_type: RTTI_Element,
mode: StructureMap_InputModeKindKeys,
_mode: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_StructureMap_Input:any = t.intersection([mandatory, partial]);
        

export type IStructureMap_Input = t.TypeOf<typeof RTTI_StructureMap_Input>;
        
        