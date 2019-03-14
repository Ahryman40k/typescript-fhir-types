
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           resourceType: t.string,
patient: RTTI_Reference,
targetDisease: RTTI_CodeableConcept,
immunizationEvent: RTTI_Reference,
doseStatus: RTTI_CodeableConcept
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
date: t.string,
_date: RTTI_Element,
authority: RTTI_Reference,
doseStatusReason: t.array(RTTI_CodeableConcept),
description: t.string,
_description: RTTI_Element,
series: t.string,
_series: RTTI_Element,
doseNumberPositiveInt: t.number,
_doseNumberPositiveInt: RTTI_Element,
doseNumberString: t.string,
_doseNumberString: RTTI_Element,
seriesDosesPositiveInt: t.number,
_seriesDosesPositiveInt: RTTI_Element,
seriesDosesString: t.string,
_seriesDosesString: RTTI_Element
        });
        

        export var RTTI_ImmunizationEvaluation:any = t.intersection([mandatory, partial]);
        

export type IImmunizationEvaluation = t.TypeOf<typeof RTTI_ImmunizationEvaluation>;
        
        