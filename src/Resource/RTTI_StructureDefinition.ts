
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_StructureDefinition_Mapping} from './RTTI_StructureDefinition_Mapping';
import {RTTI_StructureDefinition_Context} from './RTTI_StructureDefinition_Context';

import {RTTI_StructureDefinition_Snapshot} from './RTTI_StructureDefinition_Snapshot';
import {RTTI_StructureDefinition_Differential} from './RTTI_StructureDefinition_Differential';

export enum StructureDefinitionStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum StructureDefinitionKindKind {
                primitiveType = 'primitiveType',
complexType = 'complexType',
resource = 'resource',
logical = 'logical'
            }
export enum StructureDefinitionDerivationKind {
                specialization = 'specialization',
constraint = 'constraint'
            }
const StructureDefinitionStatusKindKeys = t.keyof({
                [StructureDefinitionStatusKind.draft]: null,
[StructureDefinitionStatusKind.active]: null,
[StructureDefinitionStatusKind.retired]: null,
[StructureDefinitionStatusKind.unknown]: null
            });
const StructureDefinitionKindKindKeys = t.keyof({
                [StructureDefinitionKindKind.primitiveType]: null,
[StructureDefinitionKindKind.complexType]: null,
[StructureDefinitionKindKind.resource]: null,
[StructureDefinitionKindKind.logical]: null
            });
const StructureDefinitionDerivationKindKeys = t.keyof({
                [StructureDefinitionDerivationKind.specialization]: null,
[StructureDefinitionDerivationKind.constraint]: null
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
identifier: t.array(RTTI_Identifier),
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
status: StructureDefinitionStatusKindKeys,
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
keyword: t.array(RTTI_Coding),
fhirVersion: t.string,
_fhirVersion: RTTI_Element,
mapping: t.array(RTTI_StructureDefinition_Mapping),
kind: StructureDefinitionKindKindKeys,
_kind: RTTI_Element,
abstract: t.boolean,
_abstract: RTTI_Element,
context: t.array(RTTI_StructureDefinition_Context),
contextInvariant: t.array(t.string),
_contextInvariant: t.array(RTTI_Element),
type: t.string,
_type: RTTI_Element,
baseDefinition: t.string,
derivation: StructureDefinitionDerivationKindKeys,
_derivation: RTTI_Element,
snapshot: RTTI_StructureDefinition_Snapshot,
differential: RTTI_StructureDefinition_Differential
        });
        

        export var RTTI_StructureDefinition:any = t.intersection([mandatory, partial]);
        

export type IStructureDefinition = t.TypeOf<typeof RTTI_StructureDefinition>;
        
        