
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_SupplyRequest_Parameter} from './RTTI_SupplyRequest_Parameter';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Timing} from './RTTI_Timing';

export enum SupplyRequestStatusKind {
                draft = 'draft',
active = 'active',
suspended = 'suspended',
cancelled = 'cancelled',
completed = 'completed',
enteredInError = 'enteredInError',
unknown = 'unknown'
            }
const SupplyRequestStatusKindKeys = t.keyof({
                [SupplyRequestStatusKind.draft]: null,
[SupplyRequestStatusKind.active]: null,
[SupplyRequestStatusKind.suspended]: null,
[SupplyRequestStatusKind.cancelled]: null,
[SupplyRequestStatusKind.completed]: null,
[SupplyRequestStatusKind.enteredInError]: null,
[SupplyRequestStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
quantity: RTTI_Quantity
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
identifier: RTTI_Identifier,
status: SupplyRequestStatusKindKeys,
_status: RTTI_Element,
category: RTTI_CodeableConcept,
priority: t.string,
_priority: RTTI_Element,
itemCodeableConcept: RTTI_CodeableConcept,
itemReference: RTTI_Reference,
parameter: t.array(RTTI_SupplyRequest_Parameter),
occurrenceDateTime: t.string,
_occurrenceDateTime: RTTI_Element,
occurrencePeriod: RTTI_Period,
occurrenceTiming: RTTI_Timing,
authoredOn: t.string,
_authoredOn: RTTI_Element,
requester: RTTI_Reference,
supplier: t.array(RTTI_Reference),
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
deliverFrom: RTTI_Reference,
deliverTo: RTTI_Reference
        });
        

        export var RTTI_SupplyRequest:any = t.intersection([mandatory, partial]);
        

export type ISupplyRequest = t.TypeOf<typeof RTTI_SupplyRequest>;
        
        