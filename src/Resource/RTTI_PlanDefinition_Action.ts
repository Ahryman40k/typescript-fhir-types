
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_RelatedArtifact} from './RTTI_RelatedArtifact';

import {RTTI_TriggerDefinition} from './RTTI_TriggerDefinition';
import {RTTI_PlanDefinition_Condition} from './RTTI_PlanDefinition_Condition';
import {RTTI_DataRequirement} from './RTTI_DataRequirement';
import {RTTI_PlanDefinition_RelatedAction} from './RTTI_PlanDefinition_RelatedAction';
import {RTTI_Age} from './RTTI_Age';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_PlanDefinition_Participant} from './RTTI_PlanDefinition_Participant';
import {RTTI_PlanDefinition_DynamicValue} from './RTTI_PlanDefinition_DynamicValue';

export enum PlanDefinition_ActionGroupingBehaviorKind {
                visualGroup = 'visualGroup',
logicalGroup = 'logicalGroup',
sentenceGroup = 'sentenceGroup'
            }
export enum PlanDefinition_ActionSelectionBehaviorKind {
                any = 'any',
all = 'all',
allOrNone = 'allOrNone',
exactlyOne = 'exactlyOne',
atMostOne = 'atMostOne',
oneOrMore = 'oneOrMore'
            }
export enum PlanDefinition_ActionRequiredBehaviorKind {
                must = 'must',
could = 'could',
mustUnlessDocumented = 'mustUnlessDocumented'
            }
export enum PlanDefinition_ActionPrecheckBehaviorKind {
                yes = 'yes',
no = 'no'
            }
export enum PlanDefinition_ActionCardinalityBehaviorKind {
                single = 'single',
multiple = 'multiple'
            }
const PlanDefinition_ActionGroupingBehaviorKindKeys = t.keyof({
                [PlanDefinition_ActionGroupingBehaviorKind.visualGroup]: null,
[PlanDefinition_ActionGroupingBehaviorKind.logicalGroup]: null,
[PlanDefinition_ActionGroupingBehaviorKind.sentenceGroup]: null
            });
const PlanDefinition_ActionSelectionBehaviorKindKeys = t.keyof({
                [PlanDefinition_ActionSelectionBehaviorKind.any]: null,
[PlanDefinition_ActionSelectionBehaviorKind.all]: null,
[PlanDefinition_ActionSelectionBehaviorKind.allOrNone]: null,
[PlanDefinition_ActionSelectionBehaviorKind.exactlyOne]: null,
[PlanDefinition_ActionSelectionBehaviorKind.atMostOne]: null,
[PlanDefinition_ActionSelectionBehaviorKind.oneOrMore]: null
            });
const PlanDefinition_ActionRequiredBehaviorKindKeys = t.keyof({
                [PlanDefinition_ActionRequiredBehaviorKind.must]: null,
[PlanDefinition_ActionRequiredBehaviorKind.could]: null,
[PlanDefinition_ActionRequiredBehaviorKind.mustUnlessDocumented]: null
            });
const PlanDefinition_ActionPrecheckBehaviorKindKeys = t.keyof({
                [PlanDefinition_ActionPrecheckBehaviorKind.yes]: null,
[PlanDefinition_ActionPrecheckBehaviorKind.no]: null
            });
const PlanDefinition_ActionCardinalityBehaviorKindKeys = t.keyof({
                [PlanDefinition_ActionCardinalityBehaviorKind.single]: null,
[PlanDefinition_ActionCardinalityBehaviorKind.multiple]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
prefix: t.string,
_prefix: RTTI_Element,
title: t.string,
_title: RTTI_Element,
description: t.string,
_description: RTTI_Element,
textEquivalent: t.string,
_textEquivalent: RTTI_Element,
priority: t.string,
_priority: RTTI_Element,
code: t.array(RTTI_CodeableConcept),
reason: t.array(RTTI_CodeableConcept),
documentation: t.array(RTTI_RelatedArtifact),
goalId: t.array(t.string),
_goalId: t.array(RTTI_Element),
trigger: t.array(RTTI_TriggerDefinition),
condition: t.array(RTTI_PlanDefinition_Condition),
input: t.array(RTTI_DataRequirement),
output: t.array(RTTI_DataRequirement),
relatedAction: t.array(RTTI_PlanDefinition_RelatedAction),
timingDateTime: t.string,
_timingDateTime: RTTI_Element,
timingAge: RTTI_Age,
timingPeriod: RTTI_Period,
timingDuration: RTTI_Duration,
timingRange: RTTI_Range,
timingTiming: RTTI_Timing,
participant: t.array(RTTI_PlanDefinition_Participant),
type: RTTI_CodeableConcept,
groupingBehavior: PlanDefinition_ActionGroupingBehaviorKindKeys,
_groupingBehavior: RTTI_Element,
selectionBehavior: PlanDefinition_ActionSelectionBehaviorKindKeys,
_selectionBehavior: RTTI_Element,
requiredBehavior: PlanDefinition_ActionRequiredBehaviorKindKeys,
_requiredBehavior: RTTI_Element,
precheckBehavior: PlanDefinition_ActionPrecheckBehaviorKindKeys,
_precheckBehavior: RTTI_Element,
cardinalityBehavior: PlanDefinition_ActionCardinalityBehaviorKindKeys,
_cardinalityBehavior: RTTI_Element,
definition: t.string,
transform: t.string,
dynamicValue: t.array(RTTI_PlanDefinition_DynamicValue),
action: t.array(RTTI_PlanDefinition_Action)
        });
        

        export var RTTI_PlanDefinition_Action:any = t.intersection([mandatory, partial]);
        

export type IPlanDefinition_Action = t.TypeOf<typeof RTTI_PlanDefinition_Action>;
        
        