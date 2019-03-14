
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
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_AllergyIntolerance_Reaction} from './RTTI_AllergyIntolerance_Reaction';

export enum AllergyIntoleranceCategoryKind {
                food = 'food',
medication = 'medication',
environment = 'environment',
biologic = 'biologic'
            }
export enum AllergyIntoleranceClinicalStatusKind {
                active = 'active',
inactive = 'inactive',
resolved = 'resolved'
            }
export enum AllergyIntoleranceVerificationStatusKind {
                unconfirmed = 'unconfirmed',
confirmed = 'confirmed',
refuted = 'refuted',
enteredInError = 'enteredInError'
            }
export enum AllergyIntoleranceTypeKind {
                allergy = 'allergy',
intolerance = 'intolerance'
            }
export enum AllergyIntoleranceCriticalityKind {
                low = 'low',
high = 'high',
unableToAssess = 'unableToAssess'
            }
const AllergyIntoleranceCategoryKindKeys = t.keyof({
                [AllergyIntoleranceCategoryKind.food]: null,
[AllergyIntoleranceCategoryKind.medication]: null,
[AllergyIntoleranceCategoryKind.environment]: null,
[AllergyIntoleranceCategoryKind.biologic]: null
            });
const AllergyIntoleranceClinicalStatusKindKeys = t.keyof({
                [AllergyIntoleranceClinicalStatusKind.active]: null,
[AllergyIntoleranceClinicalStatusKind.inactive]: null,
[AllergyIntoleranceClinicalStatusKind.resolved]: null
            });
const AllergyIntoleranceVerificationStatusKindKeys = t.keyof({
                [AllergyIntoleranceVerificationStatusKind.unconfirmed]: null,
[AllergyIntoleranceVerificationStatusKind.confirmed]: null,
[AllergyIntoleranceVerificationStatusKind.refuted]: null,
[AllergyIntoleranceVerificationStatusKind.enteredInError]: null
            });
const AllergyIntoleranceTypeKindKeys = t.keyof({
                [AllergyIntoleranceTypeKind.allergy]: null,
[AllergyIntoleranceTypeKind.intolerance]: null
            });
const AllergyIntoleranceCriticalityKindKeys = t.keyof({
                [AllergyIntoleranceCriticalityKind.low]: null,
[AllergyIntoleranceCriticalityKind.high]: null,
[AllergyIntoleranceCriticalityKind.unableToAssess]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
patient: RTTI_Reference
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
clinicalStatus: AllergyIntoleranceClinicalStatusKindKeys,
_clinicalStatus: RTTI_Element,
verificationStatus: AllergyIntoleranceVerificationStatusKindKeys,
_verificationStatus: RTTI_Element,
type: AllergyIntoleranceTypeKindKeys,
_type: RTTI_Element,
category: t.array(AllergyIntoleranceCategoryKindKeys),
_category: t.array(RTTI_Element),
criticality: AllergyIntoleranceCriticalityKindKeys,
_criticality: RTTI_Element,
code: RTTI_CodeableConcept,
encounter: RTTI_Reference,
onsetDateTime: t.string,
_onsetDateTime: RTTI_Element,
onsetAge: RTTI_Age,
onsetPeriod: RTTI_Period,
onsetRange: RTTI_Range,
onsetString: t.string,
_onsetString: RTTI_Element,
recordedDate: t.string,
_recordedDate: RTTI_Element,
recorder: RTTI_Reference,
asserter: RTTI_Reference,
lastOccurrence: t.string,
_lastOccurrence: RTTI_Element,
note: t.array(RTTI_Annotation),
reaction: t.array(RTTI_AllergyIntolerance_Reaction)
        });
        

        export var RTTI_AllergyIntolerance:any = t.intersection([mandatory, partial]);
        

export type IAllergyIntolerance = t.TypeOf<typeof RTTI_AllergyIntolerance>;
        
        