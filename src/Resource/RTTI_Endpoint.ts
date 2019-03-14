
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';



export enum EndpointStatusKind {
                active = 'active',
suspended = 'suspended',
error = 'error',
off = 'off',
enteredInError = 'enteredInError',
test = 'test'
            }
const EndpointStatusKindKeys = t.keyof({
                [EndpointStatusKind.active]: null,
[EndpointStatusKind.suspended]: null,
[EndpointStatusKind.error]: null,
[EndpointStatusKind.off]: null,
[EndpointStatusKind.enteredInError]: null,
[EndpointStatusKind.test]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
connectionType: RTTI_Coding,
payloadType: t.array(RTTI_CodeableConcept)
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
status: EndpointStatusKindKeys,
_status: RTTI_Element,
name: t.string,
_name: RTTI_Element,
managingOrganization: RTTI_Reference,
contact: t.array(RTTI_ContactPoint),
period: RTTI_Period,
payloadMimeType: t.array(t.string),
_payloadMimeType: t.array(RTTI_Element),
address: t.string,
_address: RTTI_Element,
header: t.array(t.string),
_header: t.array(RTTI_Element)
        });
        

        export var RTTI_Endpoint:any = t.intersection([mandatory, partial]);
        

export type IEndpoint = t.TypeOf<typeof RTTI_Endpoint>;
        
        