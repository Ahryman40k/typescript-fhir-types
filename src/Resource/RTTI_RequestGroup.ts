
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';


import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_RequestGroup_Action} from './RTTI_RequestGroup_Action';




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
_instantiatesCanonical: t.array(RTTI_Element),
instantiatesUri: t.array(t.string),
_instantiatesUri: t.array(RTTI_Element),
basedOn: t.array(RTTI_Reference),
replaces: t.array(RTTI_Reference),
groupIdentifier: RTTI_Identifier,
status: t.string,
_status: RTTI_Element,
intent: t.string,
_intent: RTTI_Element,
priority: t.string,
_priority: RTTI_Element,
code: RTTI_CodeableConcept,
subject: RTTI_Reference,
context: RTTI_Reference,
authoredOn: t.string,
_authoredOn: RTTI_Element,
author: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
action: t.array(RTTI_RequestGroup_Action)
        });
        

        export var RTTI_RequestGroup:any = t.intersection([mandatory, partial]);
        

export type IRequestGroup = t.TypeOf<typeof RTTI_RequestGroup>;
        
        