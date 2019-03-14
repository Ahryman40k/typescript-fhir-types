
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CapabilityStatement_Security} from './RTTI_CapabilityStatement_Security';
import {RTTI_CapabilityStatement_Resource} from './RTTI_CapabilityStatement_Resource';
import {RTTI_CapabilityStatement_Interaction1} from './RTTI_CapabilityStatement_Interaction1';
import {RTTI_CapabilityStatement_SearchParam} from './RTTI_CapabilityStatement_SearchParam';
import {RTTI_CapabilityStatement_Operation} from './RTTI_CapabilityStatement_Operation';


export enum CapabilityStatement_RestModeKind {
                client = 'client',
server = 'server'
            }
const CapabilityStatement_RestModeKindKeys = t.keyof({
                [CapabilityStatement_RestModeKind.client]: null,
[CapabilityStatement_RestModeKind.server]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
mode: CapabilityStatement_RestModeKindKeys,
_mode: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element,
security: RTTI_CapabilityStatement_Security,
resource: t.array(RTTI_CapabilityStatement_Resource),
interaction: t.array(RTTI_CapabilityStatement_Interaction1),
searchParam: t.array(RTTI_CapabilityStatement_SearchParam),
operation: t.array(RTTI_CapabilityStatement_Operation),
compartment: t.array(t.string)
        });
        

        export var RTTI_CapabilityStatement_Rest:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Rest = t.TypeOf<typeof RTTI_CapabilityStatement_Rest>;
        
        