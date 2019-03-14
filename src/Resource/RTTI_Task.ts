
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_Task_Restriction} from './RTTI_Task_Restriction';
import {RTTI_Task_Input} from './RTTI_Task_Input';
import {RTTI_Task_Output} from './RTTI_Task_Output';

export enum TaskStatusKind {
                draft = 'draft',
requested = 'requested',
received = 'received',
accepted = 'accepted',
rejected = 'rejected',
ready = 'ready',
cancelled = 'cancelled',
inProgress = 'inProgress',
onHold = 'onHold',
failed = 'failed',
completed = 'completed',
enteredInError = 'enteredInError'
            }
export enum TaskIntentKind {
                unknown = 'unknown',
proposal = 'proposal',
plan = 'plan',
order = 'order',
originalOrder = 'originalOrder',
reflexOrder = 'reflexOrder',
fillerOrder = 'fillerOrder',
instanceOrder = 'instanceOrder',
option = 'option'
            }
const TaskStatusKindKeys = t.keyof({
                [TaskStatusKind.draft]: null,
[TaskStatusKind.requested]: null,
[TaskStatusKind.received]: null,
[TaskStatusKind.accepted]: null,
[TaskStatusKind.rejected]: null,
[TaskStatusKind.ready]: null,
[TaskStatusKind.cancelled]: null,
[TaskStatusKind.inProgress]: null,
[TaskStatusKind.onHold]: null,
[TaskStatusKind.failed]: null,
[TaskStatusKind.completed]: null,
[TaskStatusKind.enteredInError]: null
            });
const TaskIntentKindKeys = t.keyof({
                [TaskIntentKind.unknown]: null,
[TaskIntentKind.proposal]: null,
[TaskIntentKind.plan]: null,
[TaskIntentKind.order]: null,
[TaskIntentKind.originalOrder]: null,
[TaskIntentKind.reflexOrder]: null,
[TaskIntentKind.fillerOrder]: null,
[TaskIntentKind.instanceOrder]: null,
[TaskIntentKind.option]: null
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
instantiatesCanonical: t.string,
instantiatesUri: t.string,
_instantiatesUri: RTTI_Element,
basedOn: t.array(RTTI_Reference),
groupIdentifier: RTTI_Identifier,
partOf: t.array(RTTI_Reference),
status: TaskStatusKindKeys,
_status: RTTI_Element,
statusReason: RTTI_CodeableConcept,
businessStatus: RTTI_CodeableConcept,
intent: TaskIntentKindKeys,
_intent: RTTI_Element,
priority: t.string,
_priority: RTTI_Element,
code: RTTI_CodeableConcept,
description: t.string,
_description: RTTI_Element,
focus: RTTI_Reference,
for: RTTI_Reference,
context: RTTI_Reference,
executionPeriod: RTTI_Period,
authoredOn: t.string,
_authoredOn: RTTI_Element,
lastModified: t.string,
_lastModified: RTTI_Element,
requester: RTTI_Reference,
performerType: t.array(RTTI_CodeableConcept),
owner: RTTI_Reference,
location: RTTI_Reference,
reasonCode: RTTI_CodeableConcept,
reasonReference: RTTI_Reference,
insurance: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
relevantHistory: t.array(RTTI_Reference),
restriction: RTTI_Task_Restriction,
input: t.array(RTTI_Task_Input),
output: t.array(RTTI_Task_Output)
        });
        

        export var RTTI_Task:any = t.intersection([mandatory, partial]);
        

export type ITask = t.TypeOf<typeof RTTI_Task>;
        
        