
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
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Questionnaire_Item} from './RTTI_Questionnaire_Item';

export enum QuestionnaireStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const QuestionnaireStatusKindKeys = t.keyof({
                [QuestionnaireStatusKind.draft]: null,
[QuestionnaireStatusKind.active]: null,
[QuestionnaireStatusKind.retired]: null,
[QuestionnaireStatusKind.unknown]: null
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
derivedFrom: t.array(t.string),
status: QuestionnaireStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
subjectType: t.array(t.string),
_subjectType: t.array(RTTI_Element),
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
approvalDate: t.string,
_approvalDate: RTTI_Element,
lastReviewDate: t.string,
_lastReviewDate: RTTI_Element,
effectivePeriod: RTTI_Period,
code: t.array(RTTI_Coding),
item: t.array(RTTI_Questionnaire_Item)
        });
        

        export var RTTI_Questionnaire:any = t.intersection([mandatory, partial]);
        

export type IQuestionnaire = t.TypeOf<typeof RTTI_Questionnaire>;
        
        