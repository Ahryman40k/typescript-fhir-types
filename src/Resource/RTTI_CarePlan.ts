
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
import {RTTI_CarePlan_Activity} from './RTTI_CarePlan_Activity';
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
partOf: t.array(RTTI_Reference),
status: t.string,
_status: RTTI_Element,
intent: t.string,
_intent: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
title: t.string,
_title: RTTI_Element,
description: t.string,
_description: RTTI_Element,
context: RTTI_Reference,
period: RTTI_Period,
created: t.string,
_created: RTTI_Element,
author: RTTI_Reference,
contributor: t.array(RTTI_Reference),
careTeam: t.array(RTTI_Reference),
addresses: t.array(RTTI_Reference),
supportingInfo: t.array(RTTI_Reference),
goal: t.array(RTTI_Reference),
activity: t.array(RTTI_CarePlan_Activity),
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_CarePlan:any = t.intersection([mandatory, partial]);
        

export type ICarePlan = t.TypeOf<typeof RTTI_CarePlan>;
        
        