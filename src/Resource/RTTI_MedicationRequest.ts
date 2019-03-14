
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';

import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_Dosage} from './RTTI_Dosage';
import {RTTI_MedicationRequest_DispenseRequest} from './RTTI_MedicationRequest_DispenseRequest';
import {RTTI_MedicationRequest_Substitution} from './RTTI_MedicationRequest_Substitution';

export enum MedicationRequestStatusKind {
                active = 'active',
onHold = 'onHold',
cancelled = 'cancelled',
completed = 'completed',
enteredInError = 'enteredInError',
stopped = 'stopped',
draft = 'draft',
unknown = 'unknown'
            }
export enum MedicationRequestIntentKind {
                proposal = 'proposal',
plan = 'plan',
order = 'order',
originalOrder = 'originalOrder',
instanceOrder = 'instanceOrder',
option = 'option'
            }
const MedicationRequestStatusKindKeys = t.keyof({
                [MedicationRequestStatusKind.active]: null,
[MedicationRequestStatusKind.onHold]: null,
[MedicationRequestStatusKind.cancelled]: null,
[MedicationRequestStatusKind.completed]: null,
[MedicationRequestStatusKind.enteredInError]: null,
[MedicationRequestStatusKind.stopped]: null,
[MedicationRequestStatusKind.draft]: null,
[MedicationRequestStatusKind.unknown]: null
            });
const MedicationRequestIntentKindKeys = t.keyof({
                [MedicationRequestIntentKind.proposal]: null,
[MedicationRequestIntentKind.plan]: null,
[MedicationRequestIntentKind.order]: null,
[MedicationRequestIntentKind.originalOrder]: null,
[MedicationRequestIntentKind.instanceOrder]: null,
[MedicationRequestIntentKind.option]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
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
status: MedicationRequestStatusKindKeys,
_status: RTTI_Element,
intent: MedicationRequestIntentKindKeys,
_intent: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
priority: t.string,
_priority: RTTI_Element,
doNotPerform: t.boolean,
_doNotPerform: RTTI_Element,
medicationCodeableConcept: RTTI_CodeableConcept,
medicationReference: RTTI_Reference,
context: RTTI_Reference,
supportingInformation: t.array(RTTI_Reference),
authoredOn: t.string,
_authoredOn: RTTI_Element,
requester: RTTI_Reference,
performer: RTTI_Reference,
performerType: RTTI_CodeableConcept,
recorder: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
instantiates: t.array(t.string),
_instantiates: t.array(RTTI_Element),
basedOn: t.array(RTTI_Reference),
groupIdentifier: RTTI_Identifier,
statusReason: RTTI_CodeableConcept,
courseOfTherapyType: RTTI_CodeableConcept,
insurance: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
dosageInstruction: t.array(RTTI_Dosage),
dispenseRequest: RTTI_MedicationRequest_DispenseRequest,
substitution: RTTI_MedicationRequest_Substitution,
priorPrescription: RTTI_Reference,
detectedIssue: t.array(RTTI_Reference),
eventHistory: t.array(RTTI_Reference)
        });
        

        export var RTTI_MedicationRequest:any = t.intersection([mandatory, partial]);
        

export type IMedicationRequest = t.TypeOf<typeof RTTI_MedicationRequest>;
        
        