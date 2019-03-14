
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_CommunicationRequest_Payload} from './RTTI_CommunicationRequest_Payload';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Annotation} from './RTTI_Annotation';




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
basedOn: t.array(RTTI_Reference),
replaces: t.array(RTTI_Reference),
groupIdentifier: RTTI_Identifier,
status: t.string,
_status: RTTI_Element,
statusReason: RTTI_CodeableConcept,
category: t.array(RTTI_CodeableConcept),
priority: t.string,
_priority: RTTI_Element,
doNotPerform: t.boolean,
_doNotPerform: RTTI_Element,
medium: t.array(RTTI_CodeableConcept),
subject: RTTI_Reference,
about: t.array(RTTI_Reference),
context: RTTI_Reference,
payload: t.array(RTTI_CommunicationRequest_Payload),
occurrenceDateTime: t.string,
_occurrenceDateTime: RTTI_Element,
occurrencePeriod: RTTI_Period,
authoredOn: t.string,
_authoredOn: RTTI_Element,
requester: RTTI_Reference,
recipient: t.array(RTTI_Reference),
sender: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_CommunicationRequest:any = t.intersection([mandatory, partial]);
        

export type ICommunicationRequest = t.TypeOf<typeof RTTI_CommunicationRequest>;
        
        