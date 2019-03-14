
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_HumanName} from './RTTI_HumanName';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Practitioner_Qualification} from './RTTI_Practitioner_Qualification';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

export enum PractitionerGenderKind {
                male = 'male',
female = 'female',
other = 'other',
unknown = 'unknown'
            }
const PractitionerGenderKindKeys = t.keyof({
                [PractitionerGenderKind.male]: null,
[PractitionerGenderKind.female]: null,
[PractitionerGenderKind.other]: null,
[PractitionerGenderKind.unknown]: null
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
active: t.boolean,
_active: RTTI_Element,
name: t.array(RTTI_HumanName),
telecom: t.array(RTTI_ContactPoint),
address: t.array(RTTI_Address),
gender: PractitionerGenderKindKeys,
_gender: RTTI_Element,
birthDate: t.string,
_birthDate: RTTI_Element,
photo: t.array(RTTI_Attachment),
qualification: t.array(RTTI_Practitioner_Qualification),
communication: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_Practitioner:any = t.intersection([mandatory, partial]);
        

export type IPractitioner = t.TypeOf<typeof RTTI_Practitioner>;
        
        