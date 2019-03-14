
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
import {RTTI_ConceptMap_Group} from './RTTI_ConceptMap_Group';

export enum ConceptMapStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const ConceptMapStatusKindKeys = t.keyof({
                [ConceptMapStatusKind.draft]: null,
[ConceptMapStatusKind.active]: null,
[ConceptMapStatusKind.retired]: null,
[ConceptMapStatusKind.unknown]: null
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
identifier: RTTI_Identifier,
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
status: ConceptMapStatusKindKeys,
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
sourceUri: t.string,
_sourceUri: RTTI_Element,
sourceCanonical: t.string,
_sourceCanonical: RTTI_Element,
targetUri: t.string,
_targetUri: RTTI_Element,
targetCanonical: t.string,
_targetCanonical: RTTI_Element,
group: t.array(RTTI_ConceptMap_Group)
        });
        

        export var RTTI_ConceptMap:any = t.intersection([mandatory, partial]);
        

export type IConceptMap = t.TypeOf<typeof RTTI_ConceptMap>;
        
        