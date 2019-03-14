
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MedicationDispense_Performer} from './RTTI_MedicationDispense_Performer';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_Dosage} from './RTTI_Dosage';
import {RTTI_MedicationDispense_Substitution} from './RTTI_MedicationDispense_Substitution';

export enum MedicationDispenseStatusKind {
                preparation = 'preparation',
inProgress = 'inProgress',
cancelled = 'cancelled',
onHold = 'onHold',
completed = 'completed',
enteredInError = 'enteredInError',
stopped = 'stopped',
unknown = 'unknown'
            }
const MedicationDispenseStatusKindKeys = t.keyof({
                [MedicationDispenseStatusKind.preparation]: null,
[MedicationDispenseStatusKind.inProgress]: null,
[MedicationDispenseStatusKind.cancelled]: null,
[MedicationDispenseStatusKind.onHold]: null,
[MedicationDispenseStatusKind.completed]: null,
[MedicationDispenseStatusKind.enteredInError]: null,
[MedicationDispenseStatusKind.stopped]: null,
[MedicationDispenseStatusKind.unknown]: null
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
partOf: t.array(RTTI_Reference),
status: MedicationDispenseStatusKindKeys,
_status: RTTI_Element,
category: RTTI_CodeableConcept,
medicationCodeableConcept: RTTI_CodeableConcept,
medicationReference: RTTI_Reference,
subject: RTTI_Reference,
context: RTTI_Reference,
supportingInformation: t.array(RTTI_Reference),
performer: t.array(RTTI_MedicationDispense_Performer),
location: RTTI_Reference,
authorizingPrescription: t.array(RTTI_Reference),
type: RTTI_CodeableConcept,
quantity: RTTI_Quantity,
daysSupply: RTTI_Quantity,
whenPrepared: t.string,
_whenPrepared: RTTI_Element,
whenHandedOver: t.string,
_whenHandedOver: RTTI_Element,
destination: RTTI_Reference,
receiver: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
dosageInstruction: t.array(RTTI_Dosage),
substitution: RTTI_MedicationDispense_Substitution,
detectedIssue: t.array(RTTI_Reference),
statusReasonCodeableConcept: RTTI_CodeableConcept,
statusReasonReference: RTTI_Reference,
eventHistory: t.array(RTTI_Reference)
        });
        

        export var RTTI_MedicationDispense:any = t.intersection([mandatory, partial]);
        

export type IMedicationDispense = t.TypeOf<typeof RTTI_MedicationDispense>;
        
        