
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
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_ChargeItem_Performer} from './RTTI_ChargeItem_Performer';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_Annotation} from './RTTI_Annotation';

export enum ChargeItemStatusKind {
                planned = 'planned',
billable = 'billable',
notBillable = 'notBillable',
aborted = 'aborted',
billed = 'billed',
enteredInError = 'enteredInError',
unknown = 'unknown'
            }
const ChargeItemStatusKindKeys = t.keyof({
                [ChargeItemStatusKind.planned]: null,
[ChargeItemStatusKind.billable]: null,
[ChargeItemStatusKind.notBillable]: null,
[ChargeItemStatusKind.aborted]: null,
[ChargeItemStatusKind.billed]: null,
[ChargeItemStatusKind.enteredInError]: null,
[ChargeItemStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
code: RTTI_CodeableConcept,
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
definition: t.array(t.string),
_definition: t.array(RTTI_Element),
status: ChargeItemStatusKindKeys,
_status: RTTI_Element,
partOf: t.array(RTTI_Reference),
context: RTTI_Reference,
occurrenceDateTime: t.string,
_occurrenceDateTime: RTTI_Element,
occurrencePeriod: RTTI_Period,
occurrenceTiming: RTTI_Timing,
performer: t.array(RTTI_ChargeItem_Performer),
performingOrganization: RTTI_Reference,
requestingOrganization: RTTI_Reference,
costCenter: RTTI_Reference,
quantity: RTTI_Quantity,
bodysite: t.array(RTTI_CodeableConcept),
factorOverride: t.number,
_factorOverride: RTTI_Element,
priceOverride: RTTI_Money,
overrideReason: t.string,
_overrideReason: RTTI_Element,
enterer: RTTI_Reference,
enteredDate: t.string,
_enteredDate: RTTI_Element,
reason: t.array(RTTI_CodeableConcept),
service: t.array(RTTI_Reference),
productReference: RTTI_Reference,
productCodeableConcept: RTTI_CodeableConcept,
account: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
supportingInformation: t.array(RTTI_Reference)
        });
        

        export var RTTI_ChargeItem:any = t.intersection([mandatory, partial]);
        

export type IChargeItem = t.TypeOf<typeof RTTI_ChargeItem>;
        
        