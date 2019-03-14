
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_RiskAssessment_Prediction} from './RTTI_RiskAssessment_Prediction';
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
basedOn: RTTI_Reference,
parent: RTTI_Reference,
status: t.string,
_status: RTTI_Element,
method: RTTI_CodeableConcept,
code: RTTI_CodeableConcept,
context: RTTI_Reference,
occurrenceDateTime: t.string,
_occurrenceDateTime: RTTI_Element,
occurrencePeriod: RTTI_Period,
condition: RTTI_Reference,
performer: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
basis: t.array(RTTI_Reference),
prediction: t.array(RTTI_RiskAssessment_Prediction),
mitigation: t.string,
_mitigation: RTTI_Element,
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_RiskAssessment:any = t.intersection([mandatory, partial]);
        

export type IRiskAssessment = t.TypeOf<typeof RTTI_RiskAssessment>;
        
        