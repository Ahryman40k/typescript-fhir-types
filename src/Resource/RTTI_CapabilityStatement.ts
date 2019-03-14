
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

import {RTTI_CapabilityStatement_Software} from './RTTI_CapabilityStatement_Software';
import {RTTI_CapabilityStatement_Implementation} from './RTTI_CapabilityStatement_Implementation';

import {RTTI_CapabilityStatement_Rest} from './RTTI_CapabilityStatement_Rest';
import {RTTI_CapabilityStatement_Messaging} from './RTTI_CapabilityStatement_Messaging';
import {RTTI_CapabilityStatement_Document} from './RTTI_CapabilityStatement_Document';

export enum CapabilityStatementStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum CapabilityStatementKindKind {
                instance = 'instance',
capability = 'capability',
requirements = 'requirements'
            }
const CapabilityStatementStatusKindKeys = t.keyof({
                [CapabilityStatementStatusKind.draft]: null,
[CapabilityStatementStatusKind.active]: null,
[CapabilityStatementStatusKind.retired]: null,
[CapabilityStatementStatusKind.unknown]: null
            });
const CapabilityStatementKindKindKeys = t.keyof({
                [CapabilityStatementKindKind.instance]: null,
[CapabilityStatementKindKind.capability]: null,
[CapabilityStatementKindKind.requirements]: null
            });


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
url: t.string,
_url: RTTI_Element,
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
status: CapabilityStatementStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
date: t.string,
_date: RTTI_Element,
publisher: t.string,
_publisher: RTTI_Element,
contact: t.array(RTTI_ContactDetail),
description: t.string,
_description: RTTI_Element,
useContext: t.array(RTTI_UsageContext),
jurisdiction: t.array(RTTI_CodeableConcept),
purpose: t.string,
_purpose: RTTI_Element,
copyright: t.string,
_copyright: RTTI_Element,
kind: CapabilityStatementKindKindKeys,
_kind: RTTI_Element,
instantiates: t.array(t.string),
imports: t.array(t.string),
software: RTTI_CapabilityStatement_Software,
implementation: RTTI_CapabilityStatement_Implementation,
fhirVersion: t.string,
_fhirVersion: RTTI_Element,
format: t.array(t.string),
_format: t.array(RTTI_Element),
patchFormat: t.array(t.string),
_patchFormat: t.array(RTTI_Element),
implementationGuide: t.array(t.string),
rest: t.array(RTTI_CapabilityStatement_Rest),
messaging: t.array(RTTI_CapabilityStatement_Messaging),
document: t.array(RTTI_CapabilityStatement_Document)
        });
        

        export var RTTI_CapabilityStatement:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement = t.TypeOf<typeof RTTI_CapabilityStatement>;
        
        