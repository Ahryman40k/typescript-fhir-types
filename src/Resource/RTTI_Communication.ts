
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';


import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Communication_Payload} from './RTTI_Communication_Payload';
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
instantiatesCanonical: t.array(t.string),
instantiatesUri: t.array(t.string),
_instantiatesUri: t.array(RTTI_Element),
basedOn: t.array(RTTI_Reference),
partOf: t.array(RTTI_Reference),
inResponseTo: t.array(RTTI_Reference),
status: t.string,
_status: RTTI_Element,
statusReason: RTTI_CodeableConcept,
category: t.array(RTTI_CodeableConcept),
priority: t.string,
_priority: RTTI_Element,
medium: t.array(RTTI_CodeableConcept),
subject: RTTI_Reference,
topic: RTTI_CodeableConcept,
about: t.array(RTTI_Reference),
context: RTTI_Reference,
sent: t.string,
_sent: RTTI_Element,
received: t.string,
_received: RTTI_Element,
recipient: t.array(RTTI_Reference),
sender: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
payload: t.array(RTTI_Communication_Payload),
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_Communication:any = t.intersection([mandatory, partial]);
        

export type ICommunication = t.TypeOf<typeof RTTI_Communication>;
        
        