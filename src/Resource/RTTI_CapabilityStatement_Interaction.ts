
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum CapabilityStatement_InteractionCodeKind {
                read = 'read',
vread = 'vread',
update = 'update',
patch = 'patch',
delete = 'delete',
historyInstance = 'historyInstance',
historyType = 'historyType',
create = 'create',
searchType = 'searchType'
            }
const CapabilityStatement_InteractionCodeKindKeys = t.keyof({
                [CapabilityStatement_InteractionCodeKind.read]: null,
[CapabilityStatement_InteractionCodeKind.vread]: null,
[CapabilityStatement_InteractionCodeKind.update]: null,
[CapabilityStatement_InteractionCodeKind.patch]: null,
[CapabilityStatement_InteractionCodeKind.delete]: null,
[CapabilityStatement_InteractionCodeKind.historyInstance]: null,
[CapabilityStatement_InteractionCodeKind.historyType]: null,
[CapabilityStatement_InteractionCodeKind.create]: null,
[CapabilityStatement_InteractionCodeKind.searchType]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: CapabilityStatement_InteractionCodeKindKeys,
_code: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_CapabilityStatement_Interaction:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Interaction = t.TypeOf<typeof RTTI_CapabilityStatement_Interaction>;
        
        