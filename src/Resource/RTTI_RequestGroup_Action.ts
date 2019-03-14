
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_RelatedArtifact} from './RTTI_RelatedArtifact';
import {RTTI_RequestGroup_Condition} from './RTTI_RequestGroup_Condition';
import {RTTI_RequestGroup_RelatedAction} from './RTTI_RequestGroup_RelatedAction';
import {RTTI_Age} from './RTTI_Age';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Reference} from './RTTI_Reference';




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
documentation: t.array(RTTI_RelatedArtifact),
condition: t.array(RTTI_RequestGroup_Condition),
relatedAction: t.array(RTTI_RequestGroup_RelatedAction),
timingDateTime: t.string,
_timingDateTime: RTTI_Element,
timingAge: RTTI_Age,
timingPeriod: RTTI_Period,
timingDuration: RTTI_Duration,
timingRange: RTTI_Range,
timingTiming: RTTI_Timing,
participant: t.array(RTTI_Reference),
type: RTTI_CodeableConcept,
groupingBehavior: t.string,
_groupingBehavior: RTTI_Element,
selectionBehavior: t.string,
_selectionBehavior: RTTI_Element,
requiredBehavior: t.string,
_requiredBehavior: RTTI_Element,
precheckBehavior: t.string,
_precheckBehavior: RTTI_Element,
cardinalityBehavior: t.string,
_cardinalityBehavior: RTTI_Element,
resource: RTTI_Reference,
action: t.array(RTTI_RequestGroup_Action)
        });
        

        export var RTTI_RequestGroup_Action:any = t.intersection([mandatory, partial]);
        

export type IRequestGroup_Action = t.TypeOf<typeof RTTI_RequestGroup_Action>;
        
        