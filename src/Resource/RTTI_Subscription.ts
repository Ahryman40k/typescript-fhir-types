
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Subscription_Channel} from './RTTI_Subscription_Channel';
import {RTTI_Coding} from './RTTI_Coding';

export enum SubscriptionStatusKind {
                requested = 'requested',
active = 'active',
error = 'error',
off = 'off'
            }
const SubscriptionStatusKindKeys = t.keyof({
                [SubscriptionStatusKind.requested]: null,
[SubscriptionStatusKind.active]: null,
[SubscriptionStatusKind.error]: null,
[SubscriptionStatusKind.off]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
channel: RTTI_Subscription_Channel
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
status: SubscriptionStatusKindKeys,
_status: RTTI_Element,
contact: t.array(RTTI_ContactPoint),
end: t.string,
_end: RTTI_Element,
reason: t.string,
_reason: RTTI_Element,
criteria: t.string,
_criteria: RTTI_Element,
error: t.string,
_error: RTTI_Element,
tag: t.array(RTTI_Coding)
        });
        

        export var RTTI_Subscription:any = t.intersection([mandatory, partial]);
        

export type ISubscription = t.TypeOf<typeof RTTI_Subscription>;
        
        