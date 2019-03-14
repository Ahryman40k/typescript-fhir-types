
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
import {RTTI_Age} from './RTTI_Age';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_FamilyMemberHistory_Condition} from './RTTI_FamilyMemberHistory_Condition';

export enum FamilyMemberHistoryStatusKind {
                partial = 'partial',
completed = 'completed',
enteredInError = 'enteredInError',
healthUnknown = 'healthUnknown'
            }
const FamilyMemberHistoryStatusKindKeys = t.keyof({
                [FamilyMemberHistoryStatusKind.partial]: null,
[FamilyMemberHistoryStatusKind.completed]: null,
[FamilyMemberHistoryStatusKind.enteredInError]: null,
[FamilyMemberHistoryStatusKind.healthUnknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
patient: RTTI_Reference,
relationship: RTTI_CodeableConcept
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
instantiatesCanonical: t.array(t.string),
instantiatesUri: t.array(t.string),
_instantiatesUri: t.array(RTTI_Element),
status: FamilyMemberHistoryStatusKindKeys,
_status: RTTI_Element,
dataAbsentReason: RTTI_CodeableConcept,
date: t.string,
_date: RTTI_Element,
name: t.string,
_name: RTTI_Element,
gender: RTTI_CodeableConcept,
bornPeriod: RTTI_Period,
bornDate: t.string,
_bornDate: RTTI_Element,
bornString: t.string,
_bornString: RTTI_Element,
ageAge: RTTI_Age,
ageRange: RTTI_Range,
ageString: t.string,
_ageString: RTTI_Element,
estimatedAge: t.boolean,
_estimatedAge: RTTI_Element,
deceasedBoolean: t.boolean,
_deceasedBoolean: RTTI_Element,
deceasedAge: RTTI_Age,
deceasedRange: RTTI_Range,
deceasedDate: t.string,
_deceasedDate: RTTI_Element,
deceasedString: t.string,
_deceasedString: RTTI_Element,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
condition: t.array(RTTI_FamilyMemberHistory_Condition)
        });
        

        export var RTTI_FamilyMemberHistory:any = t.intersection([mandatory, partial]);
        

export type IFamilyMemberHistory = t.TypeOf<typeof RTTI_FamilyMemberHistory>;
        
        