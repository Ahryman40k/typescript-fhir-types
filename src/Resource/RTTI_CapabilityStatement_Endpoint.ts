
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           protocol: RTTI_Coding
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
address: t.string,
_address: RTTI_Element
        });
        

        export var RTTI_CapabilityStatement_Endpoint:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Endpoint = t.TypeOf<typeof RTTI_CapabilityStatement_Endpoint>;
        
        