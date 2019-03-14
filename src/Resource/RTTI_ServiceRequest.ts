
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';


import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Ratio} from './RTTI_Ratio';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Annotation} from './RTTI_Annotation';




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
instantiatesCanonical: t.array(t.string),
instantiatesUri: t.array(t.string),
_instantiatesUri: t.array(RTTI_Element),
basedOn: t.array(RTTI_Reference),
replaces: t.array(RTTI_Reference),
requisition: RTTI_Identifier,
status: t.string,
_status: RTTI_Element,
intent: t.string,
_intent: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
priority: t.string,
_priority: RTTI_Element,
doNotPerform: t.boolean,
_doNotPerform: RTTI_Element,
code: RTTI_CodeableConcept,
orderDetail: t.array(RTTI_CodeableConcept),
quantityQuantity: RTTI_Quantity,
quantityRatio: RTTI_Ratio,
quantityRange: RTTI_Range,
context: RTTI_Reference,
occurrenceDateTime: t.string,
_occurrenceDateTime: RTTI_Element,
occurrencePeriod: RTTI_Period,
occurrenceTiming: RTTI_Timing,
asNeededBoolean: t.boolean,
_asNeededBoolean: RTTI_Element,
asNeededCodeableConcept: RTTI_CodeableConcept,
authoredOn: t.string,
_authoredOn: RTTI_Element,
requester: RTTI_Reference,
performerType: RTTI_CodeableConcept,
performer: t.array(RTTI_Reference),
locationCode: t.array(RTTI_CodeableConcept),
locationReference: t.array(RTTI_Reference),
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
insurance: t.array(RTTI_Reference),
supportingInfo: t.array(RTTI_Reference),
specimen: t.array(RTTI_Reference),
bodySite: t.array(RTTI_CodeableConcept),
note: t.array(RTTI_Annotation),
patientInstruction: t.string,
_patientInstruction: RTTI_Element,
relevantHistory: t.array(RTTI_Reference)
        });
        

        export var RTTI_ServiceRequest:any = t.intersection([mandatory, partial]);
        

export type IServiceRequest = t.TypeOf<typeof RTTI_ServiceRequest>;
        
        