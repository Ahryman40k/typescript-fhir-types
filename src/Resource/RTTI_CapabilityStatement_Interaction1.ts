
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum CapabilityStatement_Interaction1CodeKind {
                transaction = 'transaction',
batch = 'batch',
searchSystem = 'searchSystem',
historySystem = 'historySystem'
            }
const CapabilityStatement_Interaction1CodeKindKeys = t.keyof({
                [CapabilityStatement_Interaction1CodeKind.transaction]: null,
[CapabilityStatement_Interaction1CodeKind.batch]: null,
[CapabilityStatement_Interaction1CodeKind.searchSystem]: null,
[CapabilityStatement_Interaction1CodeKind.historySystem]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: CapabilityStatement_Interaction1CodeKindKeys,
_code: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_CapabilityStatement_Interaction1:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Interaction1 = t.TypeOf<typeof RTTI_CapabilityStatement_Interaction1>;
        
        