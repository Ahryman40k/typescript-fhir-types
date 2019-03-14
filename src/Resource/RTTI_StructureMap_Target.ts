
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_StructureMap_Parameter} from './RTTI_StructureMap_Parameter';

export enum StructureMap_TargetListModeKind {
                first = 'first',
share = 'share',
last = 'last',
collate = 'collate'
            }
export enum StructureMap_TargetContextTypeKind {
                type = 'type',
variable = 'variable'
            }
export enum StructureMap_TargetTransformKind {
                create = 'create',
copy = 'copy',
truncate = 'truncate',
escape = 'escape',
cast = 'cast',
append = 'append',
translate = 'translate',
reference = 'reference',
dateOp = 'dateOp',
uuid = 'uuid',
pointer = 'pointer',
evaluate = 'evaluate',
cc = 'cc',
c = 'c',
qty = 'qty',
id = 'id',
cp = 'cp'
            }
const StructureMap_TargetListModeKindKeys = t.keyof({
                [StructureMap_TargetListModeKind.first]: null,
[StructureMap_TargetListModeKind.share]: null,
[StructureMap_TargetListModeKind.last]: null,
[StructureMap_TargetListModeKind.collate]: null
            });
const StructureMap_TargetContextTypeKindKeys = t.keyof({
                [StructureMap_TargetContextTypeKind.type]: null,
[StructureMap_TargetContextTypeKind.variable]: null
            });
const StructureMap_TargetTransformKindKeys = t.keyof({
                [StructureMap_TargetTransformKind.create]: null,
[StructureMap_TargetTransformKind.copy]: null,
[StructureMap_TargetTransformKind.truncate]: null,
[StructureMap_TargetTransformKind.escape]: null,
[StructureMap_TargetTransformKind.cast]: null,
[StructureMap_TargetTransformKind.append]: null,
[StructureMap_TargetTransformKind.translate]: null,
[StructureMap_TargetTransformKind.reference]: null,
[StructureMap_TargetTransformKind.dateOp]: null,
[StructureMap_TargetTransformKind.uuid]: null,
[StructureMap_TargetTransformKind.pointer]: null,
[StructureMap_TargetTransformKind.evaluate]: null,
[StructureMap_TargetTransformKind.cc]: null,
[StructureMap_TargetTransformKind.c]: null,
[StructureMap_TargetTransformKind.qty]: null,
[StructureMap_TargetTransformKind.id]: null,
[StructureMap_TargetTransformKind.cp]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
context: t.string,
_context: RTTI_Element,
contextType: StructureMap_TargetContextTypeKindKeys,
_contextType: RTTI_Element,
element: t.string,
_element: RTTI_Element,
variable: t.string,
_variable: RTTI_Element,
listMode: t.array(StructureMap_TargetListModeKindKeys),
_listMode: t.array(RTTI_Element),
listRuleId: t.string,
_listRuleId: RTTI_Element,
transform: StructureMap_TargetTransformKindKeys,
_transform: RTTI_Element,
parameter: t.array(RTTI_StructureMap_Parameter)
        });
        

        export var RTTI_StructureMap_Target:any = t.intersection([mandatory, partial]);
        

export type IStructureMap_Target = t.TypeOf<typeof RTTI_StructureMap_Target>;
        
        