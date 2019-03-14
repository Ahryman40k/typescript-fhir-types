
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';

import {RTTI_Contract_ContentDefinition} from './RTTI_Contract_ContentDefinition';
import {RTTI_Contract_Term} from './RTTI_Contract_Term';
import {RTTI_Contract_Signer} from './RTTI_Contract_Signer';
import {RTTI_Contract_Friendly} from './RTTI_Contract_Friendly';
import {RTTI_Contract_Legal} from './RTTI_Contract_Legal';
import {RTTI_Contract_Rule} from './RTTI_Contract_Rule';
import {RTTI_Attachment} from './RTTI_Attachment';




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
url: t.string,
_url: RTTI_Element,
version: t.string,
_version: RTTI_Element,
status: t.string,
_status: RTTI_Element,
legalState: RTTI_CodeableConcept,
instantiatesCanonical: RTTI_Reference,
instantiatesUri: t.string,
_instantiatesUri: RTTI_Element,
contentDerivative: RTTI_CodeableConcept,
issued: t.string,
_issued: RTTI_Element,
applies: RTTI_Period,
expirationType: RTTI_CodeableConcept,
subject: t.array(RTTI_Reference),
authority: t.array(RTTI_Reference),
domain: t.array(RTTI_Reference),
site: t.array(RTTI_Reference),
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
subtitle: t.string,
_subtitle: RTTI_Element,
alias: t.array(t.string),
_alias: t.array(RTTI_Element),
author: RTTI_Reference,
scope: RTTI_CodeableConcept,
topicCodeableConcept: RTTI_CodeableConcept,
topicReference: RTTI_Reference,
type: RTTI_CodeableConcept,
subType: t.array(RTTI_CodeableConcept),
contentDefinition: RTTI_Contract_ContentDefinition,
term: t.array(RTTI_Contract_Term),
supportingInfo: t.array(RTTI_Reference),
relevantHistory: t.array(RTTI_Reference),
signer: t.array(RTTI_Contract_Signer),
friendly: t.array(RTTI_Contract_Friendly),
legal: t.array(RTTI_Contract_Legal),
rule: t.array(RTTI_Contract_Rule),
legallyBindingAttachment: RTTI_Attachment,
legallyBindingReference: RTTI_Reference
        });
        

        export var RTTI_Contract:any = t.intersection([mandatory, partial]);
        

export type IContract = t.TypeOf<typeof RTTI_Contract>;
        
        