
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_ClinicalImpression_Investigation} from './RTTI_ClinicalImpression_Investigation';

import {RTTI_ClinicalImpression_Finding} from './RTTI_ClinicalImpression_Finding';
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
status: t.string,
_status: RTTI_Element,
statusReason: RTTI_CodeableConcept,
code: RTTI_CodeableConcept,
description: t.string,
_description: RTTI_Element,
context: RTTI_Reference,
effectiveDateTime: t.string,
_effectiveDateTime: RTTI_Element,
effectivePeriod: RTTI_Period,
date: t.string,
_date: RTTI_Element,
assessor: RTTI_Reference,
previous: RTTI_Reference,
problem: t.array(RTTI_Reference),
investigation: t.array(RTTI_ClinicalImpression_Investigation),
protocol: t.array(t.string),
_protocol: t.array(RTTI_Element),
summary: t.string,
_summary: RTTI_Element,
finding: t.array(RTTI_ClinicalImpression_Finding),
prognosisCodeableConcept: t.array(RTTI_CodeableConcept),
prognosisReference: t.array(RTTI_Reference),
supportingInfo: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_ClinicalImpression:any = t.intersection([mandatory, partial]);
        

export type IClinicalImpression = t.TypeOf<typeof RTTI_ClinicalImpression>;
        
        