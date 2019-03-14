
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_RelatedArtifact} from './RTTI_RelatedArtifact';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_ResearchStudy_Arm} from './RTTI_ResearchStudy_Arm';
import {RTTI_ResearchStudy_Objective} from './RTTI_ResearchStudy_Objective';

export enum ResearchStudyStatusKind {
                active = 'active',
administrativelyCompleted = 'administrativelyCompleted',
approved = 'approved',
closedToAccrual = 'closedToAccrual',
closedToAccrualAndIntervention = 'closedToAccrualAndIntervention',
completed = 'completed',
disapproved = 'disapproved',
inReview = 'inReview',
temporarilyClosedToAccrual = 'temporarilyClosedToAccrual',
temporarilyClosedToAccrualAndIntervention = 'temporarilyClosedToAccrualAndIntervention',
withdrawn = 'withdrawn'
            }
const ResearchStudyStatusKindKeys = t.keyof({
                [ResearchStudyStatusKind.active]: null,
[ResearchStudyStatusKind.administrativelyCompleted]: null,
[ResearchStudyStatusKind.approved]: null,
[ResearchStudyStatusKind.closedToAccrual]: null,
[ResearchStudyStatusKind.closedToAccrualAndIntervention]: null,
[ResearchStudyStatusKind.completed]: null,
[ResearchStudyStatusKind.disapproved]: null,
[ResearchStudyStatusKind.inReview]: null,
[ResearchStudyStatusKind.temporarilyClosedToAccrual]: null,
[ResearchStudyStatusKind.temporarilyClosedToAccrualAndIntervention]: null,
[ResearchStudyStatusKind.withdrawn]: null
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
identifier: t.array(RTTI_Identifier),
title: t.string,
_title: RTTI_Element,
protocol: t.array(RTTI_Reference),
partOf: t.array(RTTI_Reference),
status: ResearchStudyStatusKindKeys,
_status: RTTI_Element,
primaryPurposeType: RTTI_CodeableConcept,
phase: RTTI_CodeableConcept,
category: t.array(RTTI_CodeableConcept),
focus: t.array(RTTI_CodeableConcept),
condition: t.array(RTTI_CodeableConcept),
contact: t.array(RTTI_ContactDetail),
relatedArtifact: t.array(RTTI_RelatedArtifact),
keyword: t.array(RTTI_CodeableConcept),
location: t.array(RTTI_CodeableConcept),
description: t.string,
_description: RTTI_Element,
enrollment: t.array(RTTI_Reference),
period: RTTI_Period,
sponsor: RTTI_Reference,
principalInvestigator: RTTI_Reference,
site: t.array(RTTI_Reference),
reasonStopped: RTTI_CodeableConcept,
note: t.array(RTTI_Annotation),
arm: t.array(RTTI_ResearchStudy_Arm),
objective: t.array(RTTI_ResearchStudy_Objective)
        });
        

        export var RTTI_ResearchStudy:any = t.intersection([mandatory, partial]);
        

export type IResearchStudy = t.TypeOf<typeof RTTI_ResearchStudy>;
        
        