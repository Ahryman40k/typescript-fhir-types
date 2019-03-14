
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';

export enum MessageHeader_ResponseCodeKind {
                ok = 'ok',
transientError = 'transientError',
fatalError = 'fatalError'
            }
const MessageHeader_ResponseCodeKindKeys = t.keyof({
                [MessageHeader_ResponseCodeKind.ok]: null,
[MessageHeader_ResponseCodeKind.transientError]: null,
[MessageHeader_ResponseCodeKind.fatalError]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.string,
_identifier: RTTI_Element,
code: MessageHeader_ResponseCodeKindKeys,
_code: RTTI_Element,
details: RTTI_Reference
        });
        

        export var RTTI_MessageHeader_Response:any = t.intersection([mandatory, partial]);
        

export type IMessageHeader_Response = t.TypeOf<typeof RTTI_MessageHeader_Response>;
        
        