
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Goal_Target} from './RTTI_Goal_Target';
import {RTTI_Annotation} from './RTTI_Annotation';

export enum GoalStatusKind {
                proposed = 'proposed',
accepted = 'accepted',
planned = 'planned',
inProgress = 'inProgress',
onTarget = 'onTarget',
aheadOfTarget = 'aheadOfTarget',
behindTarget = 'behindTarget',
sustaining = 'sustaining',
achieved = 'achieved',
onHold = 'onHold',
cancelled = 'cancelled',
enteredInError = 'enteredInError',
rejected = 'rejected'
            }
const GoalStatusKindKeys = t.keyof({
                [GoalStatusKind.proposed]: null,
[GoalStatusKind.accepted]: null,
[GoalStatusKind.planned]: null,
[GoalStatusKind.inProgress]: null,
[GoalStatusKind.onTarget]: null,
[GoalStatusKind.aheadOfTarget]: null,
[GoalStatusKind.behindTarget]: null,
[GoalStatusKind.sustaining]: null,
[GoalStatusKind.achieved]: null,
[GoalStatusKind.onHold]: null,
[GoalStatusKind.cancelled]: null,
[GoalStatusKind.enteredInError]: null,
[GoalStatusKind.rejected]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
description: RTTI_CodeableConcept,
subject: RTTI_Reference
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
status: GoalStatusKindKeys,
_status: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
priority: RTTI_CodeableConcept,
startDate: t.string,
_startDate: RTTI_Element,
startCodeableConcept: RTTI_CodeableConcept,
target: RTTI_Goal_Target,
statusDate: t.string,
_statusDate: RTTI_Element,
statusReason: t.string,
_statusReason: RTTI_Element,
expressedBy: RTTI_Reference,
addresses: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
outcomeCode: t.array(RTTI_CodeableConcept),
outcomeReference: t.array(RTTI_Reference)
        });
        

        export var RTTI_Goal:any = t.intersection([mandatory, partial]);
        

export type IGoal = t.TypeOf<typeof RTTI_Goal>;
        
        