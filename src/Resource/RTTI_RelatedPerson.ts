
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_HumanName} from './RTTI_HumanName';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Period} from './RTTI_Period';

export enum RelatedPersonGenderKind {
                male = 'male',
female = 'female',
other = 'other',
unknown = 'unknown'
            }
const RelatedPersonGenderKindKeys = t.keyof({
                [RelatedPersonGenderKind.male]: null,
[RelatedPersonGenderKind.female]: null,
[RelatedPersonGenderKind.other]: null,
[RelatedPersonGenderKind.unknown]: null
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
active: t.boolean,
_active: RTTI_Element,
relationship: t.array(RTTI_CodeableConcept),
name: t.array(RTTI_HumanName),
telecom: t.array(RTTI_ContactPoint),
gender: RelatedPersonGenderKindKeys,
_gender: RTTI_Element,
birthDate: t.string,
_birthDate: RTTI_Element,
address: t.array(RTTI_Address),
photo: t.array(RTTI_Attachment),
period: RTTI_Period
        });
        

        export var RTTI_RelatedPerson:any = t.intersection([mandatory, partial]);
        

export type IRelatedPerson = t.TypeOf<typeof RTTI_RelatedPerson>;
        
        