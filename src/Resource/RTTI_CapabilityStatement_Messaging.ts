
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CapabilityStatement_Endpoint} from './RTTI_CapabilityStatement_Endpoint';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CapabilityStatement_SupportedMessage} from './RTTI_CapabilityStatement_SupportedMessage';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
endpoint: t.array(RTTI_CapabilityStatement_Endpoint),
reliableCache: t.number,
_reliableCache: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element,
supportedMessage: t.array(RTTI_CapabilityStatement_SupportedMessage)
        });
        

        export var RTTI_CapabilityStatement_Messaging:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Messaging = t.TypeOf<typeof RTTI_CapabilityStatement_Messaging>;
        
        