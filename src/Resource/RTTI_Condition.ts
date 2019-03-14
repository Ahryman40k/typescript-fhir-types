
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Age} from './RTTI_Age';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Condition_Stage} from './RTTI_Condition_Stage';
import {RTTI_Condition_Evidence} from './RTTI_Condition_Evidence';
import {RTTI_Annotation} from './RTTI_Annotation';




        const mandatory = t.type({
           resourceType: t.string,
subject: RTTI_Reference
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
clinicalStatus: RTTI_CodeableConcept,
verificationStatus: RTTI_CodeableConcept,
category: t.array(RTTI_CodeableConcept),
severity: RTTI_CodeableConcept,
code: RTTI_CodeableConcept,
bodySite: t.array(RTTI_CodeableConcept),
context: RTTI_Reference,
onsetDateTime: t.string,
_onsetDateTime: RTTI_Element,
onsetAge: RTTI_Age,
onsetPeriod: RTTI_Period,
onsetRange: RTTI_Range,
onsetString: t.string,
_onsetString: RTTI_Element,
abatementDateTime: t.string,
_abatementDateTime: RTTI_Element,
abatementAge: RTTI_Age,
abatementPeriod: RTTI_Period,
abatementRange: RTTI_Range,
abatementString: t.string,
_abatementString: RTTI_Element,
recordedDate: t.string,
_recordedDate: RTTI_Element,
recorder: RTTI_Reference,
asserter: RTTI_Reference,
stage: t.array(RTTI_Condition_Stage),
evidence: t.array(RTTI_Condition_Evidence),
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_Condition:any = t.intersection([mandatory, partial]);
        

export type ICondition = t.TypeOf<typeof RTTI_Condition>;
        
        