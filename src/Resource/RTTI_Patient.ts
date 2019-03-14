
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
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Patient_Contact} from './RTTI_Patient_Contact';
import {RTTI_Patient_Communication} from './RTTI_Patient_Communication';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Patient_Link} from './RTTI_Patient_Link';

export enum PatientGenderKind {
                male = 'male',
female = 'female',
other = 'other',
unknown = 'unknown'
            }
const PatientGenderKindKeys = t.keyof({
                [PatientGenderKind.male]: null,
[PatientGenderKind.female]: null,
[PatientGenderKind.other]: null,
[PatientGenderKind.unknown]: null
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
gender: PatientGenderKindKeys,
_gender: RTTI_Element,
birthDate: t.string,
_birthDate: RTTI_Element,
deceasedBoolean: t.boolean,
_deceasedBoolean: RTTI_Element,
deceasedDateTime: t.string,
_deceasedDateTime: RTTI_Element,
address: t.array(RTTI_Address),
maritalStatus: RTTI_CodeableConcept,
multipleBirthBoolean: t.boolean,
_multipleBirthBoolean: RTTI_Element,
multipleBirthInteger: t.number,
_multipleBirthInteger: RTTI_Element,
photo: t.array(RTTI_Attachment),
contact: t.array(RTTI_Patient_Contact),
communication: t.array(RTTI_Patient_Communication),
generalPractitioner: t.array(RTTI_Reference),
managingOrganization: RTTI_Reference,
link: t.array(RTTI_Patient_Link)
        });
        

        export var RTTI_Patient:any = t.intersection([mandatory, partial]);
        

export type IPatient = t.TypeOf<typeof RTTI_Patient>;
        
        