
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
import {RTTI_MedicationAdministration_Performer} from './RTTI_MedicationAdministration_Performer';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_MedicationAdministration_Dosage} from './RTTI_MedicationAdministration_Dosage';

export enum MedicationAdministrationStatusKind {
                inProgress = 'inProgress',
notDone = 'notDone',
onHold = 'onHold',
completed = 'completed',
enteredInError = 'enteredInError',
stopped = 'stopped',
unknown = 'unknown'
            }
const MedicationAdministrationStatusKindKeys = t.keyof({
                [MedicationAdministrationStatusKind.inProgress]: null,
[MedicationAdministrationStatusKind.notDone]: null,
[MedicationAdministrationStatusKind.onHold]: null,
[MedicationAdministrationStatusKind.completed]: null,
[MedicationAdministrationStatusKind.enteredInError]: null,
[MedicationAdministrationStatusKind.stopped]: null,
[MedicationAdministrationStatusKind.unknown]: null
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
instantiates: t.array(t.string),
_instantiates: t.array(RTTI_Element),
partOf: t.array(RTTI_Reference),
status: MedicationAdministrationStatusKindKeys,
_status: RTTI_Element,
category: RTTI_CodeableConcept,
medicationCodeableConcept: RTTI_CodeableConcept,
medicationReference: RTTI_Reference,
context: RTTI_Reference,
supportingInformation: t.array(RTTI_Reference),
effectiveDateTime: t.string,
_effectiveDateTime: RTTI_Element,
effectivePeriod: RTTI_Period,
performer: t.array(RTTI_MedicationAdministration_Performer),
statusReason: t.array(RTTI_CodeableConcept),
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
request: RTTI_Reference,
device: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
dosage: RTTI_MedicationAdministration_Dosage,
eventHistory: t.array(RTTI_Reference)
        });
        

        export var RTTI_MedicationAdministration:any = t.intersection([mandatory, partial]);
        

export type IMedicationAdministration = t.TypeOf<typeof RTTI_MedicationAdministration>;
        
        