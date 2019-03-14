
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_ProcessRequest_Item} from './RTTI_ProcessRequest_Item';

import {RTTI_Period} from './RTTI_Period';

export enum ProcessRequestActionKind {
                cancel = 'cancel',
poll = 'poll',
reprocess = 'reprocess',
status = 'status'
            }
const ProcessRequestActionKindKeys = t.keyof({
                [ProcessRequestActionKind.cancel]: null,
[ProcessRequestActionKind.poll]: null,
[ProcessRequestActionKind.reprocess]: null,
[ProcessRequestActionKind.status]: null
            });


        const mandatory = t.type({
           resourceType: t.string
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
identifier: t.array(RTTI_Identifier),
status: t.string,
_status: RTTI_Element,
action: ProcessRequestActionKindKeys,
_action: RTTI_Element,
target: RTTI_Reference,
created: t.string,
_created: RTTI_Element,
provider: RTTI_Reference,
request: RTTI_Reference,
response: RTTI_Reference,
nullify: t.boolean,
_nullify: RTTI_Element,
reference: t.string,
_reference: RTTI_Element,
item: t.array(RTTI_ProcessRequest_Item),
include: t.array(t.string),
_include: t.array(RTTI_Element),
exclude: t.array(t.string),
_exclude: t.array(RTTI_Element),
period: RTTI_Period
        });
        

        export var RTTI_ProcessRequest:any = t.intersection([mandatory, partial]);
        

export type IProcessRequest = t.TypeOf<typeof RTTI_ProcessRequest>;
        
        