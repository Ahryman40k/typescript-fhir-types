
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum CapabilityStatement_SupportedMessageModeKind {
                sender = 'sender',
receiver = 'receiver'
            }
const CapabilityStatement_SupportedMessageModeKindKeys = t.keyof({
                [CapabilityStatement_SupportedMessageModeKind.sender]: null,
[CapabilityStatement_SupportedMessageModeKind.receiver]: null
            });


        const mandatory = t.type({
           definition: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
mode: CapabilityStatement_SupportedMessageModeKindKeys,
_mode: RTTI_Element
        });
        

        export var RTTI_CapabilityStatement_SupportedMessage:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_SupportedMessage = t.TypeOf<typeof RTTI_CapabilityStatement_SupportedMessage>;
        
        