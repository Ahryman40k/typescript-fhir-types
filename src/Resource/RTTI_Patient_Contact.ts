
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_HumanName} from './RTTI_HumanName';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';

export enum Patient_ContactGenderKind {
                male = 'male',
female = 'female',
other = 'other',
unknown = 'unknown'
            }
const Patient_ContactGenderKindKeys = t.keyof({
                [Patient_ContactGenderKind.male]: null,
[Patient_ContactGenderKind.female]: null,
[Patient_ContactGenderKind.other]: null,
[Patient_ContactGenderKind.unknown]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
relationship: t.array(RTTI_CodeableConcept),
name: RTTI_HumanName,
telecom: t.array(RTTI_ContactPoint),
address: RTTI_Address,
gender: Patient_ContactGenderKindKeys,
_gender: RTTI_Element,
organization: RTTI_Reference,
period: RTTI_Period
        });
        

        export var RTTI_Patient_Contact:any = t.intersection([mandatory, partial]);
        

export type IPatient_Contact = t.TypeOf<typeof RTTI_Patient_Contact>;
        
        