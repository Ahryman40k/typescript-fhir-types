
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
target: RTTI_Reference,
endpoint: t.string,
_endpoint: RTTI_Element,
receiver: RTTI_Reference
        });
        

        export var RTTI_MessageHeader_Destination:any = t.intersection([mandatory, partial]);
        

export type IMessageHeader_Destination = t.TypeOf<typeof RTTI_MessageHeader_Destination>;
        
        