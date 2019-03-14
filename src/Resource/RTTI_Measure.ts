
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

import {RTTI_Measure_Group} from './RTTI_Measure_Group';
import {RTTI_Measure_SupplementalData} from './RTTI_Measure_SupplementalData';

export enum MeasureStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum MeasureImprovementNotationKind {
                increase = 'increase',
decrease = 'decrease'
            }
const MeasureStatusKindKeys = t.keyof({
                [MeasureStatusKind.draft]: null,
[MeasureStatusKind.active]: null,
[MeasureStatusKind.retired]: null,
[MeasureStatusKind.unknown]: null
            });
const MeasureImprovementNotationKindKeys = t.keyof({
                [MeasureImprovementNotationKind.increase]: null,
[MeasureImprovementNotationKind.decrease]: null
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
subtitle: t.string,
_subtitle: RTTI_Element,
status: MeasureStatusKindKeys,
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
library: t.array(t.string),
disclaimer: t.string,
_disclaimer: RTTI_Element,
scoring: RTTI_CodeableConcept,
compositeScoring: RTTI_CodeableConcept,
type: t.array(RTTI_CodeableConcept),
riskAdjustment: t.string,
_riskAdjustment: RTTI_Element,
rateAggregation: t.string,
_rateAggregation: RTTI_Element,
rationale: t.string,
_rationale: RTTI_Element,
clinicalRecommendationStatement: t.string,
_clinicalRecommendationStatement: RTTI_Element,
improvementNotation: MeasureImprovementNotationKindKeys,
_improvementNotation: RTTI_Element,
definition: t.array(t.string),
_definition: t.array(RTTI_Element),
guidance: t.string,
_guidance: RTTI_Element,
group: t.array(RTTI_Measure_Group),
supplementalData: t.array(RTTI_Measure_SupplementalData)
        });
        

        export var RTTI_Measure:any = t.intersection([mandatory, partial]);
        

export type IMeasure = t.TypeOf<typeof RTTI_Measure>;
        
        