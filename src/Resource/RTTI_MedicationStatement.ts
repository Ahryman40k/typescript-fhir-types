
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
import {RTTI_Dosage} from './RTTI_Dosage';

export enum MedicationStatementStatusKind {
                active = 'active',
completed = 'completed',
enteredInError = 'enteredInError',
intended = 'intended',
stopped = 'stopped',
onHold = 'onHold',
unknown = 'unknown',
notTaken = 'notTaken'
            }
const MedicationStatementStatusKindKeys = t.keyof({
                [MedicationStatementStatusKind.active]: null,
[MedicationStatementStatusKind.completed]: null,
[MedicationStatementStatusKind.enteredInError]: null,
[MedicationStatementStatusKind.intended]: null,
[MedicationStatementStatusKind.stopped]: null,
[MedicationStatementStatusKind.onHold]: null,
[MedicationStatementStatusKind.unknown]: null,
[MedicationStatementStatusKind.notTaken]: null
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
basedOn: t.array(RTTI_Reference),
partOf: t.array(RTTI_Reference),
status: MedicationStatementStatusKindKeys,
_status: RTTI_Element,
statusReason: t.array(RTTI_CodeableConcept),
category: RTTI_CodeableConcept,
medicationCodeableConcept: RTTI_CodeableConcept,
medicationReference: RTTI_Reference,
context: RTTI_Reference,
effectiveDateTime: t.string,
_effectiveDateTime: RTTI_Element,
effectivePeriod: RTTI_Period,
dateAsserted: t.string,
_dateAsserted: RTTI_Element,
informationSource: RTTI_Reference,
derivedFrom: t.array(RTTI_Reference),
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
dosage: t.array(RTTI_Dosage)
        });
        

        export var RTTI_MedicationStatement:any = t.intersection([mandatory, partial]);
        

export type IMedicationStatement = t.TypeOf<typeof RTTI_MedicationStatement>;
        
        