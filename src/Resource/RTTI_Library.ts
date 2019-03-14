
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_RelatedArtifact} from './RTTI_RelatedArtifact';
import {RTTI_ParameterDefinition} from './RTTI_ParameterDefinition';
import {RTTI_DataRequirement} from './RTTI_DataRequirement';
import {RTTI_Attachment} from './RTTI_Attachment';

export enum LibraryStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const LibraryStatusKindKeys = t.keyof({
                [LibraryStatusKind.draft]: null,
[LibraryStatusKind.active]: null,
[LibraryStatusKind.retired]: null,
[LibraryStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
type: RTTI_CodeableConcept
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
subtitle: t.string,
_subtitle: RTTI_Element,
status: LibraryStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
subjectCodeableConcept: RTTI_CodeableConcept,
subjectReference: RTTI_Reference,
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
usage: t.string,
_usage: RTTI_Element,
copyright: t.string,
_copyright: RTTI_Element,
approvalDate: t.string,
_approvalDate: RTTI_Element,
lastReviewDate: t.string,
_lastReviewDate: RTTI_Element,
effectivePeriod: RTTI_Period,
topic: t.array(RTTI_CodeableConcept),
author: t.array(RTTI_ContactDetail),
editor: t.array(RTTI_ContactDetail),
reviewer: t.array(RTTI_ContactDetail),
endorser: t.array(RTTI_ContactDetail),
relatedArtifact: t.array(RTTI_RelatedArtifact),
parameter: t.array(RTTI_ParameterDefinition),
dataRequirement: t.array(RTTI_DataRequirement),
content: t.array(RTTI_Attachment)
        });
        

        export var RTTI_Library:any = t.intersection([mandatory, partial]);
        

export type ILibrary = t.TypeOf<typeof RTTI_Library>;
        
        