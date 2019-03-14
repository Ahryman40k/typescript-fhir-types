
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';


export enum Subscription_ChannelTypeKind {
                restHook = 'restHook',
websocket = 'websocket',
email = 'email',
sms = 'sms',
message = 'message'
            }
const Subscription_ChannelTypeKindKeys = t.keyof({
                [Subscription_ChannelTypeKind.restHook]: null,
[Subscription_ChannelTypeKind.websocket]: null,
[Subscription_ChannelTypeKind.email]: null,
[Subscription_ChannelTypeKind.sms]: null,
[Subscription_ChannelTypeKind.message]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Subscription_ChannelTypeKindKeys,
_type: RTTI_Element,
endpoint: t.string,
_endpoint: RTTI_Element,
payload: t.string,
_payload: RTTI_Element,
header: t.array(t.string),
_header: t.array(RTTI_Element)
        });
        

        export var RTTI_Subscription_Channel:any = t.intersection([mandatory, partial]);
        

export type ISubscription_Channel = t.TypeOf<typeof RTTI_Subscription_Channel>;
        
        