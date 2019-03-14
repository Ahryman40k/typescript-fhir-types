
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_AdverseEvent_SuspectEntity} from './RTTI_AdverseEvent_SuspectEntity';

export enum AdverseEventActualityKind {
                actual = 'actual',
potential = 'potential'
            }
const AdverseEventActualityKindKeys = t.keyof({
                [AdverseEventActualityKind.actual]: null,
[AdverseEventActualityKind.potential]: null
            });


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
identifier: RTTI_Identifier,
actuality: AdverseEventActualityKindKeys,
_actuality: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
event: RTTI_CodeableConcept,
context: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
detected: t.string,
_detected: RTTI_Element,
recordedDate: t.string,
_recordedDate: RTTI_Element,
resultingCondition: t.array(RTTI_Reference),
location: RTTI_Reference,
seriousness: RTTI_CodeableConcept,
severity: RTTI_CodeableConcept,
outcome: RTTI_CodeableConcept,
recorder: RTTI_Reference,
contributor: t.array(RTTI_Reference),
suspectEntity: t.array(RTTI_AdverseEvent_SuspectEntity),
subjectMedicalHistory: t.array(RTTI_Reference),
referenceDocument: t.array(RTTI_Reference),
study: t.array(RTTI_Reference)
        });
        

        export var RTTI_AdverseEvent:any = t.intersection([mandatory, partial]);
        

export type IAdverseEvent = t.TypeOf<typeof RTTI_AdverseEvent>;
        
        