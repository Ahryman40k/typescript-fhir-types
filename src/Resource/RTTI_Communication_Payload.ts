
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
contentString: t.string,
_contentString: RTTI_Element,
contentAttachment: RTTI_Attachment,
contentReference: RTTI_Reference
        });
        

        export var RTTI_Communication_Payload:any = t.intersection([mandatory, partial]);
        

export type ICommunication_Payload = t.TypeOf<typeof RTTI_Communication_Payload>;
        
        