
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
import {RTTI_CodeSystem_Filter} from './RTTI_CodeSystem_Filter';
import {RTTI_CodeSystem_Property} from './RTTI_CodeSystem_Property';
import {RTTI_CodeSystem_Concept} from './RTTI_CodeSystem_Concept';

export enum CodeSystemStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum CodeSystemHierarchyMeaningKind {
                groupedBy = 'groupedBy',
isA = 'isA',
partOf = 'partOf',
classifiedWith = 'classifiedWith'
            }
export enum CodeSystemContentKind {
                notPresent = 'notPresent',
example = 'example',
fragment = 'fragment',
complete = 'complete',
supplement = 'supplement'
            }
const CodeSystemStatusKindKeys = t.keyof({
                [CodeSystemStatusKind.draft]: null,
[CodeSystemStatusKind.active]: null,
[CodeSystemStatusKind.retired]: null,
[CodeSystemStatusKind.unknown]: null
            });
const CodeSystemHierarchyMeaningKindKeys = t.keyof({
                [CodeSystemHierarchyMeaningKind.groupedBy]: null,
[CodeSystemHierarchyMeaningKind.isA]: null,
[CodeSystemHierarchyMeaningKind.partOf]: null,
[CodeSystemHierarchyMeaningKind.classifiedWith]: null
            });
const CodeSystemContentKindKeys = t.keyof({
                [CodeSystemContentKind.notPresent]: null,
[CodeSystemContentKind.example]: null,
[CodeSystemContentKind.fragment]: null,
[CodeSystemContentKind.complete]: null,
[CodeSystemContentKind.supplement]: null
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
status: CodeSystemStatusKindKeys,
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
caseSensitive: t.boolean,
_caseSensitive: RTTI_Element,
valueSet: t.string,
hierarchyMeaning: CodeSystemHierarchyMeaningKindKeys,
_hierarchyMeaning: RTTI_Element,
compositional: t.boolean,
_compositional: RTTI_Element,
versionNeeded: t.boolean,
_versionNeeded: RTTI_Element,
content: CodeSystemContentKindKeys,
_content: RTTI_Element,
supplements: t.string,
count: t.number,
_count: RTTI_Element,
filter: t.array(RTTI_CodeSystem_Filter),
property: t.array(RTTI_CodeSystem_Property),
concept: t.array(RTTI_CodeSystem_Concept)
        });
        

        export var RTTI_CodeSystem:any = t.intersection([mandatory, partial]);
        

export type ICodeSystem = t.TypeOf<typeof RTTI_CodeSystem>;
        
        