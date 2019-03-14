
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_DetectedIssue_Mitigation} from './RTTI_DetectedIssue_Mitigation';

export enum DetectedIssueSeverityKind {
                high = 'high',
moderate = 'moderate',
low = 'low'
            }
const DetectedIssueSeverityKindKeys = t.keyof({
                [DetectedIssueSeverityKind.high]: null,
[DetectedIssueSeverityKind.moderate]: null,
[DetectedIssueSeverityKind.low]: null
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
status: t.string,
_status: RTTI_Element,
category: RTTI_CodeableConcept,
severity: DetectedIssueSeverityKindKeys,
_severity: RTTI_Element,
patient: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
author: RTTI_Reference,
implicated: t.array(RTTI_Reference),
detail: t.string,
_detail: RTTI_Element,
reference: t.string,
_reference: RTTI_Element,
mitigation: t.array(RTTI_DetectedIssue_Mitigation)
        });
        

        export var RTTI_DetectedIssue:any = t.intersection([mandatory, partial]);
        

export type IDetectedIssue = t.TypeOf<typeof RTTI_DetectedIssue>;
        
        